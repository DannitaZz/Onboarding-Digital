export const formInView = () => {
  const formSection = document.createElement("section");
  formSection.setAttribute('class', 'form-section');
  const formView = `
  <form id="formview3" enctype="multipart/form-data">
    <label for="fullName">Nombre completo representante legal</label>
      <input type="text" name="fullName" id="fullName" value="${userName}" placeholder="Ejemplo: Ana María Mora Gil" disabled>
    <label for="docId">Documento de identidad representante legal</label>  
      <input type="text" name="docId" id="docId" value="${userId}" placeholder="Ejemplo: 1022564332" disabled>
    <label for="nit">NIT de la empresa</label>  
      <input type="text" name="nit" id="nit" value="${nitNumber}" placeholder="NIT de la empresa" disabled>
    <label for="businessName">Nombre de la empresa</label>
      <input type="text" name="busiName" id="businessName" value="${business}" placeholder="Ejemplo: Distribuidora Lorraine SAS" disabled>
    <label for="phone">Número de teléfono</label>  
      <input type="tel" name="phone" id="phone" placeholder="Ejemplo: 3119845632">
    <label for="city">Ciudad y departamento</label>  
      <input type="text" name="city" id="city" placeholder="Ejemplo: Bogotá/Cundinamarca">
    <label for="file">Sube los documentos</label>
      <input type="file" name="file" id="file" multiple="multiple"> 
    <button type="submit"> enviar </button>   
  </form>
  <p>Documentos requeridos:</p>
    <ul>
      <li>Cámara de Comercio</li>
      <li>RUT</li>
      <li>Documento de identidad</li>
    <ul>
  <p>Subir todos los documentos en formato PDF:</p>
  `
  formSection.innerHTML = formView; 
   
  return formSection;
};

const userName = 'pepo perez';
const userId = '1033742554';
const nitNumber = '123456789';
const business = 'Empresa sas';

