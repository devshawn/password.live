export class Logger {

    static debug(message, obj) {
        console.log(`[DEBUG] ${message}`, obj)
    }

    static debugGeneration(message, options, password) {
        console.log("---------- Password Generation Debug ----------")
        console.log(`Regex: ${message}`)
        console.log(`Password: ${password}`)
        const date = new Date()
        console.log(`Time: `, date.toDateString(), date.toTimeString())
        console.log(`Options:`)
        console.log(options)
        console.log("-----------------------------------------------")
    }

    static info(message) {
        console.log(`[INFO] ${message}`)
    }

    static warn(message) {
        console.log(`[WARN] ${message}`)
    }

    static error(message) {
        console.log(`[ERROR] ${message}`)
    }
}
