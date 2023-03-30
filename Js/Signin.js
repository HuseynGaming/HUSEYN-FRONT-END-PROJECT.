const form = document.querySelector("#signin")
const fnameInput = document.querySelector("#firstname")
const phoneInput = document.querySelector("#phone-number")
const unameInput = document.querySelector("#username")
const passwordInput = document.querySelector("#password")

let usersArray;
if (localStorage.getItem('users')) {
    usersArray = JSON.parse(localStorage.getItem('users'));
} else {
    usersArray = [];
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputs = document.querySelectorAll('.userData');
    let isEmpty = false;

    inputs.forEach(function (input) {
        if (input.value.length === 0) {
            isEmpty = true;
            nameUse = false;
        }
    });

    usersArray.forEach(function (value) {
        if (unameInput.value == value.username) {
            alert("Bu istifadəçi adı artıq işlənilib!")
            window.location.preventDefault()
            nameUse = true;
        }

    });
    if (!isEmpty) {


        const userObject = {
            firstname: fnameInput.value,
            username: unameInput.value,
            phone: phoneInput.value,
            password: passwordInput.value,
            computers: []
        };

        usersArray.push(userObject);

        const jsonString = JSON.stringify(usersArray);

        localStorage.setItem('users', jsonString);

        window.location.reload();

    }
})