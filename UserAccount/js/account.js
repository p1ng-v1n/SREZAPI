var email = window.location.hash.substring(1)
const url = `https://localhost:7296/api/Users?email=${email}`
const exit = document.getElementById('exit')

async function getUser(){
  const response = await fetch(url);
  const data = await response.json();
  const{lastName,  firstName, patronymic, image} = data;
  document.getElementById('lastname').textContent=lastName;
  document.getElementById('firstname').textContent=firstName;
  document.getElementById('patronymic').textContent=patronymic;
  document.getElementById('image').src="data:image;base64," + (image === null ? "" : image.toString("base64"));

}
getUser()
exit.addEventListener('click',(e)=>{
    window.location.href = 'index.html';
})

