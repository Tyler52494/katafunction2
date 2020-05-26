function add (x, y){
    return x + y
}

console.log(add(3, 9))

function multiply (x, z) {
    let total = 0
    for ( let count = 0; count < z; count += 1) {
        total = add (total, x)
        }
        return total

}
console.log (multiply(3, 9))

function power (a, b) {
    let total = 1
    for (let count = 0; count < a; count +=1) {
    total = multiply (total, b)
    }
    return total

}
console.log (power(4, 6))

function factorial (c) {
    let total = 1
    for (let count = 1; count <= c; count +=1) {
        total = multiply (total, count)
    }
    return total

}
console.log (factorial(3))


