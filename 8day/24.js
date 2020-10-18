const obj = {1: "a", 2: "b", 3: "c"}
const set = new Set([1, 2, 3, 4, 5])

console.log(obj.hasOwnProperty("1")) // true
console.log(obj.hasOwnProperty(1)) // true
console.log(set.has("1")) // false
console.log(set.has(1)) // true


// オブジェクトキー（Symbolsを除く）は内部で文字列になります。なのでhasOwnPropertyで"1"としてもtrueを返します。
// 一方でsetのhasはfalseを返します。

