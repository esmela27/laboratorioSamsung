const expresiones = {
    usuario: /^[a-zA-Z]/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    clave: /^.{8,}$/
}
let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let nombre= id("nombre"),
  email = id("email"),
  clave = id("clave"),
  claveConfirmar = id("claveConfirmar")
  formulario = id("formulario"),
  
  msjError = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

let motor = (id, serial) => {

if (id.value.trim() === "") {
  msjError[serial].innerHTML ="Rellene este campo";
  id.style.border = "2px solid red";
  failureIcon[serial].style.opacity = "1";
  successIcon[serial].style.opacity = "0";
} 

else {
    if (id == nombre){
        if(expresiones.usuario.test(id.value)){

            msjError[serial].innerHTML = "";
            id.style.border = "2px solid green"; 
           failureIcon[serial].style.opacity = "0";
           successIcon[serial].style.opacity = "1";
        }
        else{

           msjError[serial].innerHTML ="Nombre invalido";
           id.style.border = "2px solid red";
           failureIcon[serial].style.opacity = "1";
           successIcon[serial].style.opacity = "0";

        }
    }
    else if(id == email){
        if(expresiones.email.test(id.value)){
            msjError[serial].innerHTML = "";
            id.style.border = "2px solid green"; 
           failureIcon[serial].style.opacity = "0";
           successIcon[serial].style.opacity = "1";
        }
        else{
            msjError[serial].innerHTML ="Email invalido";
           id.style.border = "2px solid red";
           failureIcon[serial].style.opacity = "1";
           successIcon[serial].style.opacity = "0";
        }
    }
    else if (id == clave){
        if(expresiones.clave.test(id.value)){
            msjError[serial].innerHTML = "";
            id.style.border = "2px solid green"; 
           failureIcon[serial].style.opacity = "0";
           successIcon[serial].style.opacity = "1";
        }
        else{
            msjError[serial].innerHTML ="Debe tener mas de 8 carácteres";
           id.style.border = "2px solid red";
           failureIcon[serial].style.opacity = "1";
           successIcon[serial].style.opacity = "0";
        }
    }
    else if (id == claveConfirmar){
        if(clave.value == id.value){
            msjError[serial].innerHTML = "";
            id.style.border = "2px solid green"; 
           failureIcon[serial].style.opacity = "0";
           successIcon[serial].style.opacity = "1";
        }
        else{
            msjError[serial].innerHTML ="Las contraseñas no coinciden";
           id.style.border = "2px solid red";
           failureIcon[serial].style.opacity = "1";
           successIcon[serial].style.opacity = "0";
        }
    }
    
}
  

}

formulario.addEventListener('submit', (e)=>{
    e.preventDefault(); // Evitar que se recargue la pagina
  motor(nombre, 0);
  motor(email, 1);
  motor(clave, 2);
  motor(claveConfirmar, 3);

})