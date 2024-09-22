console.log('tree works')

const tree = {
    value: 1,
    children: [
        {
            value: 2,
            children: [
                { value: 3 }
            ]
        },
        {
            value: 4,
            children: [
                { value: 5 },
                { value: 6 }
            ]
        }
    ]
}

const fetchValues = (tree) => {
    const stack = [tree]
    const result = []
    while (stack.length > 0) {
        const item = stack.pop();

        if (item.value) {
            result.push(item.value)
        }

        if (item.children) {
            stack.push(...item.children)
        }
    }

    return result;
}

const result = fetchValues(tree)

console.log(result)