import { getCollection, getDataByNit, update } from "../index.js";
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

    <button type="submit" class="btn-send" id="form">ENVIAR</button>   

  </form>
  `;

  formSection.innerHTML = formView;
  const btnEnviarForm = formSection.querySelector("#form");

  const telefono = formSection.querySelector("#phone");
  const direccion = formSection.querySelector("#address");
  const ciudad = formSection.querySelector("#city");
  const departamento = formSection.querySelector("#departamento");
  const fileInput = formSection.querySelector("#file");

  const upload = async ({ file }, {file1}, {file2}) => {
    // ref al espacio en el bucket donde se va a subir
    const filesArray=[];
    const storageRef = firebase.storage().ref().child('files/${file.name}');
    const storageRef1 = firebase.storage().ref().child('files/${file1.name}');
    const storageRef2 = firebase.storage().ref().child('files/${file2.name}');
    filesArray.push(storageRef,storageRef1,storageRef2);
    // subir el archivo
    await storageRef.put(file);
    await storageRef1.put(file1);
    await storageRef2.put(file2);

    // retornar la referencia
     return filesArray
  }


  btnEnviarForm.addEventListener('click', async (e) => {
    e.preventDefault();
    console.log('ya quiero mimir');
    const nit1 = localStorage.getItem('nitUser');
    console.log(nit1);

    const file = fileInput.files[0];
    const file1 = fileInput.files[1];
    const file2 = fileInput.files[2];
    console.log(file, file1, file2);
    // upload({
    //   file: file
    // })
    const prueba= await upload({file: file} ,{file1: file1}, {file2: file2});
    console.log(prueba);

    const dataBaseUsers = await update(nit1, {
      telefono: telefono.value,
      direccion: direccion.value,
      departamento: departamento.value,
      ciudad: ciudad.value,
      StorageRef: [1,2,3], 
    });
    window.location.hash = '#/msg'
    
  });
  return formSection;
  
}

