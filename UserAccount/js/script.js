let scrollWidth = Math.max(
   document.body.scrollWidth, document.documentElement.scrollWidth,
   document.body.offsetWidth, document.documentElement.offsetWidth,
   document.body.clientWidth, document.documentElement.clientWidth
   );
let scrollHeight = Math.max(
   document.body.scrollHeight, document.documentElement.scrollHeight,
   document.body.offsetHeight, document.documentElement.offsetHeight,
   document.body.clientHeight, document.documentElement.clientHeight
);

const authEnter = document.getElementById('auth-enter')
function show_hide_password(target){
	var input = document.getElementById('auth-password');
	if (input.getAttribute('type') == 'password') {
		input.setAttribute('type', 'text');
	} else {
		input.setAttribute('type', 'password');
	}
	return false;
}
authEnter.addEventListener('click',(e)=>{
   const email = document.getElementById('auth-email')
   const password = document.getElementById('auth-password')
   const url = `http://localhost:5296/api/Users/Auth/?login=${email.value}&password=${password.value}`
   fetch(url, {
            method : 'POST'
         }).then(
            response=>{
               if(response.status === 200){
                  window.location.href = 'account.html'+ '#' + email.value;
                  ;
               }
         }
      )
})
