const form = document.querySelector('.main_form');
// const yInput = document.querySelector('.y');
// const tbodyResult = document.querySelector('.output');

form.addEventListener('submit', () => {
    const x = "1",
    //  x = form.querySelector('[name="x"]').checked,
    y = form.querySelector('[name="y"]').value,
    r = form.querySelector('[name="r"]').value;

    // const data = {
    //     x: x.checked,
    //     y: y.value,
    //     r: r.value
    // };

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

// tbodyResult.innerHTML = '<th class="success">пум пум</th>';




// $(document).ready(function() {
//     $(".ouput").prepend("<tr> <td>" + newResult + "</td> </tr>");
// });

// document.addEventListener("DOMContentLoaded", () => {
//     function validateForm() {
//         // let x = document.getElementById("x").value;
//         let y = document.getElementById("y").value;
//         // let r = document.getElementById("r").value;

//         if (isNaN(y)) {
//             alert("Invalid input! Please enter valid numbers. R should be positive.");
//             return false;
//         }
//         return true;
//     }
// });