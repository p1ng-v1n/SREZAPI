const buttonChange = document.getElementById('button-change')
function show_hide_password(target){
	var input = document.getElementById('password-change');
	if (input.getAttribute('type') == 'password') {
		input.setAttribute('type', 'text');
	} else {
		input.setAttribute('type', 'password');
	}
	return false;
}
function show_hide_password2(target){
	var input = document.getElementById('password-confim-change"');
	if (input.getAttribute('type') == 'password') {
		input.setAttribute('type', 'text');
	} else {
		input.setAttribute('type', 'password');
	}
	return false;
}
buttonChange.addEventListener('click',(e)=>{
    const password =  document.getElementById('password-change')
    const passwordConfim =  document.getElementById('password-confim-change')
    if(password.value === passwordConfim.value){
        const email =  document.getElementById('email-change')
        const url = `http://localhost:5296/api/Users/ChangePassword/?email=${email.value}&password=${password.value}`
        fetch(url, {
            method : 'POST'
            }).then(
                response=>{
                if(response.ok){
                    window.location.assign(window.location.pathname.replace('change.html', 'index.html'))
                }
            }
        )
    }
})