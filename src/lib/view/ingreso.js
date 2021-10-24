import { actionCodeSettings, createDataBase, getDataByNit,authWithEmail } from "../index.js";

export const createLogInView = () => {
  const loginSection = document.createElement("section");
  loginSection.setAttribute('class', 'login-section');
  const loginView = `
  <h1>Formulario para verificación de identidad</h1>
  <form id="formview2"> 
    <label for="fullName">Nombre completo representante legal</label>
      <input type="text" name="fullName" id="fullName" placeholder="Ejemplo: Ana María Mora Gil">
    <label for="docId">Documento de identidad</label>  
      <input type="text" name="docId" id="docId" placeholder="Ejemplo: 1022564332">
    <label for="nit">NIT de la empresa</label>  
      <input type="text" name="nit" id="nit" placeholder="Sin dígito de verificación">
    <label for="businessName">Nombre de la empresa</label>
      <input type="text"  name="busiName" id="businessName" placeholder="Ejemplo: Distribuidora Lorraine SAS">
    <p class="autExitosa hide" id="autExitosa">Autenticación exitosa. Revisa la bandeja de entrada 
      del correo registrado en Cámara de Comercio para continuar con el proceso.</p>
    <button type="submit" id="btnenviar" class="btn-send">ENVIAR</button>   

  </form>
 
  `
  loginSection.innerHTML = loginView;
  const userName = loginSection.querySelector("#fullName");
  const docId = loginSection.querySelector("#docId");
  const nitNumber = loginSection.querySelector("#nit");
  const business = loginSection.querySelector("#businessName");
  const infomsg=loginSection.querySelector("#infomsg");
  // createDataBase();
  const btnIngreso = loginSection.querySelector("#btnenviar");

  
  btnIngreso.addEventListener('click', async(e)=>{
    e.preventDefault(); 
    await createDataBase(userName.value, docId.value, business.value, nitNumber.value);   
    
    const dataBaseUsers = await getDataByNit('users',nitNumber.value);
    const dataBaseToValid= await getDataByNit('usuarios', nitNumber.value);
    
    const getNitValid=dataBaseToValid.data().nit;
    localStorage.setItem('nitUser', nitNumber.value);
    const getNitUser=dataBaseUsers.data().nit;    
    
    if(getNitValid == getNitUser){
      const email= dataBaseToValid.data().correoEmpresa;
       await authWithEmail(email,actionCodeSettings);
       console.log(email);
    }     
    // infomsg.innerHTML='por favor verifica tu bandeja de entrada';
    const msgIngreso = loginSection.querySelector("#autExitosa");
    msgIngreso.classList.remove('hide');
  })
    
  return loginSection;

};

