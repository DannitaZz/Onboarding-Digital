export const formInView = () => {
  const formSection = document.createElement("section");
  formSection.setAttribute('class', 'form-section');
  const formView = `
  <h2>Continua con el proceso de apertura de cuenta</h2>
  <form id="formview3" enctype="multipart/form-data">
    <label for="phone">Número de teléfono</label>  
      <input type="tel" name="phone" id="phone" placeholder="Ejemplo: 3119845632">
    <label for="address">Dirección</label>
      <input type="text" name="address" id="address" placeholder="Ejemplo: Cra. 24 #32-12 ofc.10">
    <label for="city">Ciudad</label>  
      <input type="text" name="city" id="city" placeholder="Ejemplo: Bogotá">
    <label for="departamento">Departamento</label>  
      <input type="text" name="departamento" id="departamento" placeholder="Ejemplo: Cundinamarca">
    <label for="file" class="label-file">Sube los documentos</label>
      <input type="file" name="file" id="file" multiple="multiple" class="btn-file"> 
    <p>Documentos requeridos:</p>
    <ul>
      <li>Cámara de Comercio</li>
      <li>RUT</li>
      <li>Documento de identidad</li>
    </ul>
    <p>Subir todos los documentos en formato PDF</p>
    <button type="submit" class="btn-send">ENVIAR</button>   
  </form>
  
  `
  formSection.innerHTML = formView; 
   
  return formSection;
};