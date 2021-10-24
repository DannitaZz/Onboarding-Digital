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
      <input type="text" name="busiName" id="businessName" placeholder="Ejemplo: Distribuidora Lorraine SAS">
 
    <button type="submit" class="btn-send">ENVIAR</button>   
 
  </form>
  `
  loginSection.innerHTML = loginView;

  
  return loginSection;
};