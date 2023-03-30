const login = document.querySelector("#loginform")
const usernamee = document.querySelector("#loginusername")
const passwordd = document.querySelector("#loginpassword")
let arr = JSON.parse(localStorage.getItem('users'));

login.addEventListener('submit', function (e) {
    e.preventDefault();
    let userExist = false;
    for (let i = 0; i < arr.length; i++) {
        if (usernamee.value == arr[i].username) {
            userExist = true;
            if (passwordd.value == arr[i].password) {
                localStorage.setItem('ID', i);
                window.location.assign("../index.html")
            } else {
                alert('Parol yanlışdır!');
            }
        }
    }
    if (!userExist) {
        alert('Belə bir istifadəçi mövcud deyil!');
    }
});