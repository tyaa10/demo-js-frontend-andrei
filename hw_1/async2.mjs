const specialMassiv = [{textForConsole:"JS", x: 43}, {textForConsole:"Threads!",
				x: 45}, {textForConsole:"Hello", x: 40}]


function doJob(argument, path, successCallback) {
    new Promise((resolve, reject) => {
     try {
      const worker = new Worker(path)
      worker.postMessage(argument)
      worker.addEventListener("message", (result) => {
        console.log('Event Args From The Worker', result)
        resolve(result.data)
      })
      worker.addEventListener("exit", (error) => reject(error.data))    
    } catch (error) {
         reject(error)
     }
}).then(successCallback)
  .catch(error => console.log(error))
}

console.log('Start The Jobs')
for (let i = 0; i < specialMassiv.length; i++) {
  doJob(specialMassiv[i], '/hw_1/writeToConsole2.mjs', (text) => console.log(text))
}
console.log('Start The Jobs is Finished');