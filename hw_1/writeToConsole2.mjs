/* function writeToConsole2 (specialObject) {
  console.log('x = ', specialObject.x);
  (function fib (n) {
    if (n < 2) {
      return n
    }
    return fib(n - 2) + fib(n - 1)
  })(specialObject.x)
  console.log(specialObject.textForConsole)
} */
function calculate (specialObject) {
  (function fib (n) {
    if (n < 2) {
      return n
    }
    return fib(n - 2) + fib(n - 1)
  })(specialObject.x)
  return specialObject.textForConsole
}

addEventListener("message", messageEvent =>
{
  console.log('Worker Event Args', messageEvent)
  postMessage(calculate(messageEvent.data))
})