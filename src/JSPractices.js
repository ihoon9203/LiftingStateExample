const map = new Map()
map.set('a', 'apple')
map.set('b', 'banana')
map.set('c', 'citrus')
console.log("For - In")
const cars = ["Saab", "Volvo", "BMW"];
for (const key in cars) {
    console.log(key)
}
console.log("For - Of")
for (const [key, value, something] of map) {
    console.log(key)
    console.log(value)
    console.log(something)
}
x = 10
console.log(Boolean(459))
console.log(x)
// const one = 1
// const two = 1

// const map2 = map
// const map3 = new Map()
// map3.set('a', 'apple')
// map3.set('b', 'banana')
// map3.set('c', 'citrus')
// console.log(one == two)
// console.log(one === two)
// console.log(one == "1")
// console.log(one === "1")
// console.log(map == map2)
// console.log(map === map2)
// console.log(map == map3)
// console.log(map === map3)

// const someFunc = (x , y) => {
//     if (x > y) {
//         print(x)
//     }
//     else {
//         print(y)
//     }
// }
// const a = "Dallas"
// console.log(a.charAt(3))
// const cars = ["Saab", "Volvo", "BMW"];
// console.log(typeof(cars))