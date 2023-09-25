import {Validator} from './validator.js';

const button = document.getElementById("submit");
var form = document.querySelector(".main_form");



button.addEventListener('click', () => {
    let xEntity = form.querySelectorAll('.checkbox:checked'),
    yEntity = form.querySelector('[name="y"]'),
    rEntity = form.querySelector('[name="r"]:checked');

    let validator = new Validator(xEntity, yEntity, rEntity);
    if (validator.validation()) {
        let x = xEntity[0].value, y = yEntity.value, r = rEntity.value;

        const params = new URLSearchParams(); 
        params.set('x', x);
        params.set('y', y);
        params.set('r', r);

        fetch(`./handler.php`, {
            method: 'POST',
            body: params
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Server responded with bad getaway status: ${response.status}`);
                }
                let $responseText = response.text();
                return $responseText;
            })
            .then(function (serverAnswer) {
                console.log(serverAnswer)
                localStorage.setItem("session", serverAnswer);
                document.getElementById("output").innerHTML = serverAnswer;
            })
            .catch(error => {
                alert(`There was an error processing your request: ${error.message}`)
            })
    } else {
        alert(validator.message);
    }
    
    
});
