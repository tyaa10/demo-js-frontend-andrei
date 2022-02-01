// const x = 44

function doJob(data, path, succsessCallback) {
  new Promise((resolve, reject) => {
    try {
      // создание фонового потока, выполняющего код из модуля fibWorker,
      // с передачей в него значения х
      const worker = new Worker(path)
      worker.postMessage(data)
      // установка метода обратного вызова:
      // когда из фонового потока вернется результат - вызвать положительный метод обратного вызова,
      // установленный на Promise
      worker.addEventListener("message", (result) => resolve(result.data))
      // если из фонового потока вернется ошибка - вызвать отрицательный метод обратного вызова,
      // установленный на Promise
      worker.addEventListener("exit", (error) => reject(error.data))
    } catch (error) {
      // если ошибка произошла в самом процессе выделения фонового потока или установки на него
      // методов обратного вызова - вызвать отрицательный метод обратного вызова,
      // установленный на Promise
      reject(error)
    }
  }).then(succsessCallback) // когда результат готов - выводим в консоль
    .catch(error => console.log(error))
}

// console.log('Start The Jobs')
// doJob(x, '/fibWorker.mjs', (result) => console.log(`fib(${x}) = ${result}`))
// doJob(x, '/factWorker.mjs', (result) => console.log(`fact(${x}) = ${result}`))
// console.log('Start The Jobs is Finished')

const factResultSpan = document.getElementById('factResult')
const fibResultSpan = document.getElementById('fibResult')

const form = document.getElementsByTagName('form')[0]

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const input = document.getElementById('x')
  const x = input.value

 
// b = document.createElement("b")
 // b.innerHTML = x
 // document.body.insertBefore(b, ")" )
  document.getElementById("s1").innerHTML = x
  document.getElementById("s2").innerHTML = x
  factResultSpan.innerText = 'Wait For Calculating Result...'
  fibResultSpan.innerText = 'Wait For Calculating Result...'
  doJob(x, '/fibWorker.mjs', (result) => fibResultSpan.innerText = result)
  doJob(x, '/factWorker.mjs', (result) => factResultSpan.innerText = result)
})

