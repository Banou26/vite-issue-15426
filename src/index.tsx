import { myDatabase, addSomethingToTheDB } from './database'
import { sharedWorker } from './shared-worker'

console.log('worker database', myDatabase)

addSomethingToTheDB()