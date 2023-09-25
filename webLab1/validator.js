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
        return this.checkX() && this.checkY() && this.checkR();
    }

    checkX() {
        if (this.xEntity.length > 1) {
            this.message = "Enter only one value of X coordinate";
            return false;
        } else if (this.xEntity.value = ""){
            this.message = "Enter X value. It can't be empty";
            return false;
        } else {
            return true;
        }
    }

    checkY() {
        let currentY = this.yEntity.value;
        if (isNaN(currentY)) {
            this.message = "Y value must be a number";
            return false;
        } else if (currentY === ""){
            this.message = "Enter Y value. It can't be empty";
            return false;
        } else if (!['-5', '-4', '-3', '-2', '-1', '0', '1', '2', '3', '4', '5'].includes(currentY)) {
            this.message = "Y value must be from -5 to 5";
            return false;
        } else { 
            return true;
        }
    }

    checkR() {
        if (this.rEntity.value === "") {
            this.message = "Enter R value. It can't be empty";
            return false;
        } else {
            return true;
        }
    }
}
