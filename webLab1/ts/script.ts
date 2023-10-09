import {Validator} from './validator.js';
// import '@bjnstnkvc/alert/src/alert.css';

const button: HTMLElement | null = document.getElementById("submit");
let form: HTMLElement | null = document.querySelector(".main_form");

let func = async function() {
    
    let xEntity: NodeListOf<HTMLInputElement> = form?.querySelectorAll('.checkbox:checked')!,
    yEntity: HTMLInputElement = form?.querySelector('[name="y"]')!,
    rEntity: HTMLInputElement = form?.querySelector('[name="r"]:checked')!;

    let validator: Validator = new Validator(xEntity, yEntity, rEntity);
    if (validator.validate()) {
        let x: string = xEntity[0].value, y: string = yEntity.value, r: string = rEntity.value;

        const params: URLSearchParams = new URLSearchParams(); 
        params.set('x', x);
        params.set('y', y);
        params.set('r', r);

        let response: Response = await fetch(`../php/handler.php`, {
            method: 'POST',
            body: params
        })
        try {
            if (!response.ok) {
                const errorResponse = await response.json();
                alert(`Server error: ${errorResponse.error_message}`);
                return false;
            }
            let serverAnswer: string = await response.text();
            localStorage.setItem("session", serverAnswer);
            document.getElementById("output")!.innerHTML = serverAnswer;
        } catch (err: any) {
            alert(`There was an error processing your request: ${err.message}`)
        }
    } else {
        //Swal.fire(validator.message);
        alert(validator.message);
    }    
}

if (button) {
    button.onclick = func;
}

