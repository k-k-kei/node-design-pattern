//継続渡しスタイル
function addAsync(a, b, callback){
    setTimeout(() => callback(a + b), 100);
}
console.log("before");

addAsync(1, 2, result => console.log("Result:" + result));

console.log("after");

//継続渡しではないコールバック
const result = [1 ,5, 7].map(el => el - 1);
console.log(result);