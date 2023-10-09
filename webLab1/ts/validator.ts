export class Validator {
    xEntity: NodeListOf<Element> | null | undefined 
    yEntity: HTMLInputElement | null | undefined
    rEntity: HTMLInputElement | null | undefined
    message: string = "";

    /**
     * 
     * @param {*} x array of values of checkbox input
     * @param {*} y text input
     * @param {*} r radio input
     */
    constructor(x: NodeListOf<HTMLInputElement> | null | undefined , y: HTMLInputElement | null, r: HTMLInputElement | null) {
        this.xEntity = x;
        this.yEntity = y;
        this.rEntity = r;
    }

    checkX(): boolean {
        let currentX: NodeListOf<Element> | null | undefined = this.xEntity
        if (currentX == null) {
            return false;
        } else {
            if (currentX.length > 1) {
                this.message = "Enter only one value of X coordinate";
                return false;
            } else if (currentX[0].textContent = ""){
                this.message = "Enter X value. It can't be empty";
                return false;
            } else { 
                return true;
            }
        }
    }

    checkY(): boolean {
        let currentY: string | undefined  = this.yEntity?.value;
        if (currentY == undefined) {
            return false;
        } else {
            if (isNaN(parseInt(currentY))) {
                this.message = "Y value must be a number";
                return false;
            } else if (this.yEntity!.value === ""){
                this.message = "Enter Y value. It can't be empty";
                return false;
            } else if (!['-5', '-4', '-3', '-2', '-1', '0', '1', '2', '3', '4', '5'].includes(currentY)) {
                this.message = "Y value must be from -5 to 5";
                return false;
            } else { 
                return true;
            }
        }
    }

    checkR(): boolean {
        if (this.rEntity!.value === "" || this.rEntity!.value == null) {
            this.message = "Enter R value. It can't be empty";
            return false;
        } else {
            return true;
        }
    }

    validate(): boolean {
        return this.checkX() && this.checkY() && this.checkR();
    }
}
