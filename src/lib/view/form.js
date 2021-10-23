export const formInView = () => {
  const formSection = document.createElement("section");
  formSection.setAttribute('class', 'form-section');
  const formView = `
  
  <form id="formview3"> 
  <input type="text"  name="fullName" id="fullName" placeholder="*Nombre(s) y Apellido(s)">
  <input type="text"  name="docId"    id="docId"    placeholder="Documento de identidad">
  <input type="text"  name="nit"      id="nit"      placeholder="NIT de la empresa">
  <input type="text"  name="busiName" id="busiName" placeholder="Nombre de la empresa ">  
  <input type="text"  name="phone"    id="phone"    placeholder="Número de teléfono">  
  <input type="text"  name="city"     id="city"     placeholder="Ciudad y departamento">  
  <input type="file"  name="file"      id="file"    multiple="multiple"> 
  <button type="submit"> enviar </button>   
  </form>
`
  formSection.innerHTML = formView;   
  return formSection;
};