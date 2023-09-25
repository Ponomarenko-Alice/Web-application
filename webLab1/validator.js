export class Validator {
    xEntity;
    yEntity;
    rEntity;
    message = "";

    /**
     * 
     * @param {*} x array of values of checkbox input
     * @param {*} y text input
     * @param {*} r radio input
     */
    constructor(x, y, r) {
        this.xEntity = x;
        this.yEntity = y;
        this.rEntity = r;
    }
 
    validation() {
        return this.checkX;
    }

    checkX() {
        if (xEntity.length > 1) {
            validation.message = "x only one";
            return false;
        }
    }

    checkY() {

    }

    checkR() {

    }
}
