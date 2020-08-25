const adder = (a, b, cb) => {
    const sum = a + b
    cb(sum)
}

adder(5, 7, sum => {
    console.log(sum)
})

const subtracter = (a, b, cb) => {
    const sum = a - b
    cb(sum)
}

subtracter(5, 7, sum => {
    console.log(sum)
})

const multiplier = (a, b, cb) => {
    const sum = a * b
    cb(sum)
}

multiplier(5, 7, sum => {
    console.log(sum)
})

const divider = (a, b, cb) => {
    const sum = a / b
    cb(sum)
}

divider(12, 3, sum => {
    console.log(sum)
})