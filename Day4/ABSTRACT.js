module.exports = class MyInterface {

    /**
     * @return {string}
     */
    firstMethod() {}
}
const MyInterface = require('./MyInterface')

module.exports = class MyImplementation extends MyInterface {

    myVar

    constructor(theVar) {
        this.myVar = theVar
    }

    /**
     * @inheritDoc
     */
    firstMethod() {
        return 'secondMethod'
    }
}

/**
 * {MyInterface} myObject
 */
const myFunction = () => {
    return new MyImplementation()
}