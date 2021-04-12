const fs = require('fs')

const readPathFiles = new Promise((resolvePath) => fs.readdir(__dirname, (err, files) => {

    const folders = files.filter(name => fs.lstatSync(`${__dirname}/${name}`).isDirectory())

    const resolvers = folders.filter(name => !name.includes('customer')).map(folderName => {

        return new Promise((resolveFiles) => fs.readdir(`${__dirname}/${folderName}`, (err, content) => {

            const files = content.filter(name => !fs.lstatSync(`${__dirname}/${folderName}/${name}`).isDirectory())

            const filesPath = files.filter(test => !test.includes('main')).map(tests => {
                return `./${tests}`
            })

            resolveFiles({ [folderName]: filesPath })
        })

        )
    })

    Promise.all(resolvers).then(data => resolvePath(data))

}))

readPathFiles.then(data => createPathTestsFile(data))

function createPathTestsFile(paths) {

    const filesObject = paths.reduce((finalObject, test) => {
        return {
            ...finalObject,
            ...test
        }
    }, {})

    const testFiles = JSON.stringify(filesObject).replace(/["']/g, '\'')


    const codeString = `const pathTests = ${testFiles}
module.exports = { pathTests }`


    fs.writeFile(`${__dirname}/test-files.js`, codeString, { flag: 'wx' }, () => { })

}
