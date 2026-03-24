const add10 = async (x) => x + 10;
const mul10 = (x) => x * 10;
const add100 = async (x) => x + 100;

// compose返回异步函数
function compose(...fns) {
    return async function (x) {
        return fns.reduceRight(async (pre, curFn) => {
            // 等待参数
            const waitGet = await pre
            return curFn(waitGet)
        }, x)
    }
}

// fn:一个组合好的异步函数
const fn = compose(add10, mul10, add100);
// 等待接收ans
const ans = await fn(10)
console.log(ans);

