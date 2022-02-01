function fact(n) {
  if (typeof n !== 'number' || n < 1) {
    postMessage('Error: argument n must be a number from 1 and greather')
  }
  if (n === 1) {
    return 1
  }
  return fact(n - 1) * n
}
// сначала получаем из workerData входное значение (не может быть функцией!),
// и после окончания выполнения метода fact
// при помощи метода postMessage вызываем событие 'message'
addEventListener("message", workerData => {
  postMessage(fact(workerData.data))
})