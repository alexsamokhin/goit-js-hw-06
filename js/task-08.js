const form = document.querySelector('.login-form');
form.addEventListener('submit', handleSubmit);
function handleSubmit(evt) {
    evt.preventDefault();
    const { elements: { email, password } } = evt.currentTarget;

    if (email.value === "" || password.value === "") {
        alert('Всі поля повинні бути заповнені');
    }

    const formObj = {
        email: email.value,
        password: password.value
    }

    console.log(formObj)
    evt.currentTarget.reset();
}