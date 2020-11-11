// [2, 3, 6,78, 99, 104, 23].reduce((max, curNum) =>{
//     return Math.max(max, curNum)
// })

// let rainValues = [[2.1, 3.4, 1.2], [3.1, 1.4, 2.2], [1.1, 0.4, 2.2]]

// rainValues.map( val => val.reduce((sum, next) => sum + next))


let double = arr => arr.map(val => val * 2);

let squareAndFindEvens = numbers => {
    let squares = numbers.map(val => val ** 2);
    let evens = squares.filter(square => square % 2 === 0)
    return evens
}