        //  the declaration
let form =document.getElementById('form');
let emailinput = document.getElementById('exampleInputEmail1');
let emailwarning = document.getElementById('emailwarning');
let emailok = document.getElementById('emailok');
let passwordok = document.getElementById('passwordok');
let passwordwarning = document.getElementById('passwordwarning');
let passwordinput = document.getElementById('exampleInputPassword1');
let signupbtn = document.getElementById('signup'); //catching the signup button 
let signinbtn = document.getElementById('signin'); //catching the signin button 
const rgx = /([a-zA-Z0-9])[gmail yahoo hotmail](.com){1}/;
const psd = /[0-9]{8}$/;


// let secondpage = document.getElementById('secondpage');



// this will set the road for the application
if(localStorage.getItem('data') == null){
alert('this is the first time to use the app on your browser');
var users = [];
}else{
    console.log("not the first time ");
    var users = JSON.parse(localStorage.getItem('data'));
    console.log(users);
    // users.push(JSON.parse(localStorage.getItem('data')));
}

// the code functions

// the signin key function
signupbtn.addEventListener('click',function(){
    member = {
        email : emailinput.value,
        password : passwordinput.value
    };
    // console.log(member);
  users.push(member);
    console.log(users);
    localStorage.setItem('data' , JSON.stringify(users));
   
} )


//  the email validation    
emailinput.addEventListener('keyup',function(){
    

    if( rgx.test(emailinput.value) == true){
        console.log("its oko ");
        emailinput.classList.remove('is-invalid');
        emailinput.classList.add('is-valid');
        emailwarning.classList.add('d-none');
        emailok.classList.remove('d-none');
    }else{
        console.log("not ook ");
        emailinput.classList.remove('is-valid');
        emailinput.classList.add('is-invalid');
        emailok.classList.add('d-none');
        emailwarning.classList.remove('d-none');
    }

   
} )

    // the password validation 
passwordinput.addEventListener('keyup', function(){

    if( psd.test(passwordinput.value) == true){
        console.log("it's ok ");
        passwordok.classList.remove("d-none");
        passwordwarning.classList.add("d-none");
      passwordinput.classList.add('is-valid');
      passwordinput.classList.remove('is-invalid');
      
    }else {
        console.log("it's not ok ");
        passwordok.classList.add("d-none");
        passwordwarning.classList.remove("d-none");
      passwordinput.classList.remove('is-valid');
      passwordinput.classList.add('is-invalid');
    }
})
        //  switching the signup btn 
form.addEventListener('keyup', function(){
    if(rgx.test(emailinput.value) == true &&  psd.test(passwordinput.value) == true){
         signupbtn.removeAttribute('disabled');
    }else{
        signupbtn.setAttribute('disabled', true);
    }
})

// the sign in btn

signinbtn.addEventListener('click',function(){
   for(var i = 0 ; i<=users.length ; i++){
     if( emailinput.value == users[i].email && passwordinput.value == users[i].password ){
           console.log('yes');
           window.location.replace("https://saif58475.github.io/my-cv/");
           alert("Welcome to the new page");
            e.preventDefault           
     } else{
         alert('Invalid email or password');
         break;
     }
   }    
      
})

