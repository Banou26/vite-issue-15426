
export const myDatabase = 'myDatabase' // RxJS DB instance in this case

export const addSomethingToTheDB = async () => {
  // this code should only be called in the main thread
  const { default: worker } = await import('../shared-worker')
  worker.postMessage({ type: 'addSomethingToTheDB' })
  // ... more work
}
