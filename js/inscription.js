let btn = document.querySelector('.btn')
function siginUp(e) {
 
  
  let userList = JSON.parse(localStorage.getItem('userList')) || [];
  var nom = document.getElementById('Nom').value ;
  var Prenom = document.getElementById('Prenom').value ;
 
  var email = document.getElementById('email').value;
  var mdp = document.getElementById('password').value;

  let user = {
      Nom: nom,
      Prenom: Prenom,
      email :email,
      mdp:mdp
  }
  userList.push(user)
  var json = JSON.stringify(userList)
  localStorage.setItem('userList',json)
  console.log('user added')
  console.log(userList)
}


btn.addEventListener('click', ()=>{
  siginUp()
})