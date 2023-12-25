
import SharedWorkerURL from './worker/index?worker&url'

export const sharedWorker = new SharedWorker(SharedWorkerURL, { type: 'module' })
