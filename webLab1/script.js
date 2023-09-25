const button = document.getElementById("submit");
var form = document.querySelector(".main_form");

button.addEventListener('click', () => {
    let x= form.querySelector('.checkbox:checked').value,
    y = form.querySelector('[name="y"]').value,
    r = form.querySelector('[name="r"]:checked').value;
    console.log(r);


    var params = new URLSearchParams(); 
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
            $responseText = response.text();
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
});
