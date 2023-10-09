"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
var Validator = /** @class */ (function () {
    /**
     *
     * @param {*} x array of values of checkbox input
     * @param {*} y text input
     * @param {*} r radio input
     */
    function Validator(x, y, r) {
        this.message = "";
        this.xEntity = x;
        this.yEntity = y;
        this.rEntity = r;
    }
    Validator.prototype.checkX = function () {
        var currentX = this.xEntity;
        if (currentX == null) {
            return false;
        }
        else {
            if (currentX.length > 1) {
                this.message = "Enter only one value of X coordinate";
                return false;
            }
            else if (currentX[0].textContent = "") {
                this.message = "Enter X value. It can't be empty";
                return false;
            }
            else {
                return true;
            }
        }
    };
    Validator.prototype.checkY = function () {
        var _a;
        var currentY = (_a = this.yEntity) === null || _a === void 0 ? void 0 : _a.value;
        if (currentY == undefined) {
            return false;
        }
        else {
            if (isNaN(parseInt(currentY))) {
                this.message = "Y value must be a number";
                return false;
            }
            else if (this.yEntity.value === "") {
                this.message = "Enter Y value. It can't be empty";
                return false;
            }
            else if (!['-5', '-4', '-3', '-2', '-1', '0', '1', '2', '3', '4', '5'].includes(currentY)) {
                this.message = "Y value must be from -5 to 5";
                return false;
            }
            else {
                return true;
            }
        }
    };
    Validator.prototype.checkR = function () {
        if (this.rEntity.value === "" || this.rEntity.value == null) {
            this.message = "Enter R value. It can't be empty";
            return false;
        }
        else {
            return true;
        }
    };
    Validator.prototype.validate = function () {
        return this.checkX() && this.checkY() && this.checkR();
    };
    return Validator;
}());
exports.Validator = Validator;
