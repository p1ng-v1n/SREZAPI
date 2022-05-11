const buttonRecovery = document.getElementById('button-recovery')

buttonRecovery.addEventListener('click',()=>{
    const emailRecovery = document.getElementById('email-recovery')
    const url = `http://localhost:5296/api/Users/PasswordRecovery/?email=${emailRecovery.value}`
    fetch(url, {
            method : 'POST'
            }).then(
                response=>{
                if(response.ok){
                    window.location.assign(window.location.pathname.replace('recovery.html', 'change.html'))
                }
            }
        )
})