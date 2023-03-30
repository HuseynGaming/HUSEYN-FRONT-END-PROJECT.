const spanUsername = document.querySelector('.showusername');
const logOutBtn = document.querySelector('.logout');
const userLabel = document.querySelector('.user-data');
const myprofile = document.querySelector('.myprofile')
const mycomputers = document.querySelector('.computers')
const logInBtn = document.querySelector('.logInBtn')

const userArr = JSON.parse(localStorage.getItem("users"))

if (localStorage.getItem('ID')) {
    let userIndex = localStorage.getItem('ID');
    spanUsername.innerText = userArr[userIndex].username;
    mycomputers.classList.remove('d-none')
    logInBtn.classList.add('d-none')
} else {
    mainPageReset();
}

logOutBtn.addEventListener('click', function () {
    mainPageReset();
    localStorage.removeItem('ID');
});

function mainPageReset() {
    logOutBtn.classList.add('d-none');
    spanUsername.classList.add('d-none');
    mycomputers.classList.add('d-none')
    logInBtn.classList.remove('d-none')
}
