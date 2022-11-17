document.querySelector('#login-button').addEventListener('click', () => {
    document.querySelector('.form1').style.display = 'flex';
});
document.querySelector('#signup-button').addEventListener('click', () => {
    document.querySelector('.form2').style.display = 'flex';
});
//        validation of password
document.querySelector('.signup-submit-button').onclick = function(){
    let pass = document.getElementById('pass').value;
    var confirmPassword = document.getElementById('cPass').value;
    console.log(pass);
    if(pass==""){
        alert("Field cannot be empty.")
    }
    else if(pass != confirmPassword){
        alert("password did not match Try again.");
        return false
    }
    else if(pass==confirmPassword){
        alert("password match");
    }
    return true;
}


document.querySelector('.close-btn1').addEventListener('click', () => {
    document.querySelector('.form1').style.display = 'none';
    console.log('form1 closed');
});
document.querySelector('.close-btn2').addEventListener('click', () => {
    document.querySelector('.form2').style.display = 'none';
    console.log('form2 closed');
});
