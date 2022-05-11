const registrationButton = document.getElementById('registration-button')
function show_hide_password(target){
	var input = document.getElementById('password');
	if (input.getAttribute('type') == 'password') {
		input.setAttribute('type', 'text');
	} else {
		input.setAttribute('type', 'password');
	}
	return false;
}
function show_hide_password2(target){
	var input = document.getElementById('password-confim');
	if (input.getAttribute('type') == 'password') {
		input.setAttribute('type', 'text');
	} else {
		input.setAttribute('type', 'password');
	}
	return false;
}
registrationButton.addEventListener('click', (e)=>{
    e.preventDefault()
    const password =  document.getElementById('password')
    const passwordRemeber =  document.getElementById('password-confim')
    if(password.value === passwordRemeber.value){
        const fio = document.getElementById('FIO')
        const email = document.getElementById('email')
        const fioLines = fio.value.split(' ')
        const body = JSON.stringify(
            {
                'LastName' : fioLines[0],
                'FirstName' : fioLines[1],
                'Patronymic' : fioLines[2],
                'Email': email.value,
                'Password' : password.value,
                "Image":null
            }
        )
        fetch('http://localhost:5296/api/Users/PostUser', {
            method : 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body : body
        }).then(
            response=>{
                if(response.status === 200){
                    window.location.assign(window.location.pathname.replace('registration.html', 'index.html'))
                }
            }
        )
    }
})