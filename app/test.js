const array = [{ groupId: 'a', api: {} }, { groupId: 'b', api: {} }]

for (let i = 0; i < array.length; i++) {
    console.log(array[i])

    if (array[i].groupId === 'a') array[i].api = { a: 'a' }

    console.log(array[i])

}


console.log(array.map(data => {
    return data.groupId === 'a' ? data['api'] = { a: 'a' } : data
}))