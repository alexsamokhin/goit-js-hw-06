const form = document.querySelector('.login-form');
form.addEventListener('submit', handleSubmit);
function handleSubmit(evt) {
    evt.preventDefault();
    const {
        elements: { email, password }
    } = evt.currentTarget;

    if (email.value === "" || password.value === "") {
        alert('Всі поля повинні бути заповнені');
    }

    console.log(`email: ${email.value}, password: ${password.value}`);
    evt.currentTarget.reset();
}