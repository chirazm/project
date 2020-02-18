
document.querySelector("#form").addEventListener("submit" , function(e){
    e.preventDefault()
    submitFormulaire()
})
var firebaseConfig = {
    apiKey: "AIzaSyDs7TYf-4RAVVQfeq50CLqxbx5irz3xmTs",
    authDomain: "accueil-63ff9.firebaseapp.com",
    databaseURL: "https://accueil-63ff9.firebaseio.com",
    projectId: "accueil-63ff9",
    storageBucket: "accueil-63ff9.appspot.com",
    messagingSenderId: "616647271698",
    appId: "1:616647271698:web:6d96495778d6a34ae97fcb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 

  // 1 import librairies

  // 2 create database var
      let database = firebase.database()
  // 3 set a reference
       let ref = database.ref("accueil")
function submitFormulaire(){
      // 4 prepare data
      let data = {
          nom : document.querySelector("#nom").value ,
          prenom : document.querySelector("#prenom").value,
          email : document.querySelector("#email").value,
          passe : document.querySelector("#passe").value,
          numero : document.querySelector("#numero").value
        }
     // 5 upload data
          ref.push(data)
}
function verif()
{ if (document.f.nom.value == "") { alert("Veuillez taper votre nom!"); return false; };
if(document.f.prenom.value == "") { alert("Veuillez taper votre prénom!"); return false; };
 if(document.f.email.value == "") { alert("Veuillez entrer votre adresse e-mail!"); return false; }
 if(document.f.email.value.indexOf('@') == -1) { alert("Adresse e-mail incorrecte!"); return false; }
