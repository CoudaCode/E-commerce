
var btn = document.querySelector('.btn');

function login(e) {
 
  
  let userList = JSON.parse(localStorage.getItem('userList')) || [];
 
  var email = document.getElementById('email').value;
  var mdp = document.getElementById('password').value;
  let result ;
  userList.forEach(use => {
      if (email === use.email && mdp === use.mdp ) {
        result = use;
        console.log(use)
      }
  }); 


  if ( result !== undefined) {
    window.location.replace('http://127.0.0.1:5500/index.html')
    console.log(typeof(result))
  } else {
    document.querySelector('#erreur').textContent = "Erreur"
  }
  
}

document.querySelector('#form', (e)=>{
  e.preventDefault()
  function login(e)
})
btn.addEventListener('click', (e)=>{
  e.preventDefault()
  
})