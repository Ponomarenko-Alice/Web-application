const form = document.querySelector('.main_form');

form.addEventListener('submit', () => {
    const x = "1",
    y = form.querySelector('[name="y"]').value,
    r = form.querySelector('[name="r"]').value;


    fetch(`./handler.php?x=${x}&y=${y}&r=${r}`, {
        method: 'POST',
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Server responded with bad getaway status: ${response.status}`);
            }
            $responseText = response.text();
            return $responseText;
        })
        .then(function (serverAnswer) {
            localStorage.setItem("session", serverAnswer);
            document.getElementById("output").innerHTML = serverAnswer;
        })
        .catch(error => {
            alert(`There was an error processing your request: ${error.message}`)
        })
});
