
//Patrones

let patron = /[a-zA-Z]/
let alertNombre = document.getElementById(`alertname`)
let iniciador1= 0;
let iniciador2= 0;
let iniciador3= 0;
let iniciador4= 0;
let cambiador1= document.getElementById('alertfinal')

const validarNombre = () =>
{
    let nombre = document.getElementById(`Name`).value;
    
    if(patron.test(nombre))
    {   alertNombre.innerHTML = "Nombre ingresado correctamente";
       iniciador1=1;
    }
    else
    {
        alertNombre.innerHTML = "El campo no puede estar vacío ni cointener caracteres especiales";
    }
}

let alertApellido = document.getElementById(`alertlastname`)

const validarApellido = () =>
{
    let apellido = document.getElementById(`apellidos`).value;
    
    if(patron.test(apellido))
    {
        alertApellido.innerHTML = "Apellidos ingresados correctamente";
        apellido=true;
        iniciador2=1;
    }
    else
    {
        alertApellido.innerHTML = "El campo no puede estar vacío ni contener caracteres especiales";

    }
}
let alertCorreo = document.getElementById(`alertmail`);
let patronCorreo = /.(@dominio.com)$/

const validarCorreo = () =>
{
    let correo = document.getElementById(`email`).value;
    
    if(patron.test(correo) && patronCorreo.test(correo))
    {
        alertCorreo.innerHTML = "Correo ingresado exitosamente";
         iniciador3=1
    }
    else
    {
        alertCorreo.innerHTML = "Su correo debe terminar con @dominio.com";
        
    }
}


let alertCelular = document.getElementById(`alertnumber`);
let patronCelular = /^3\d{9}/

const validarCelular = () =>
{
    let celular = document.getElementById(`cel`).value;
    
    if(patronCelular.test(celular))
    {
        alertCelular.innerHTML = "Numero Valido";
        iniciador4=1;
    }
    else
    {
        alertCelular.innerHTML = `El numero debe empezar con 3 y debe tener solo 10 carfacteres`;

    }
}

text1=document.getElementById('identificador1');
text2=document.getElementById('identificador2');

function finalizar() {
    let validacionNombre = validarNombre();
    let validacionApellido = validarApellido();
    let validacionCorreo = validarCorreo();
    let validacionCelular = validarCelular();
    

    if  (iniciador1===1&&iniciador2===1&&iniciador3===1&&iniciador4===1)  {
        alert('registro exitoso');
        text1.innerHTML = ("Nombre :"+Name.value);
        text2.innerHTML=("Apellido: "+apellidos.value);

    }else{
        alert('Datos incorrectos, ingrese nuevamente'); 
    }
    
} 
let boton =document.getElementById('registroON');
boton.addEventListener('click',finalizar)
