export const infoInView = () => {
  const infoSection = document.createElement('section');
  infoSection.setAttribute('class', 'info-section');
  const loginSection = `
    <p>Abre una cuenta para tu PYME de forma digital,</br> fácil y sencilla.</p>
    <p>*Requisitos en formato PDF para continuar el proceso:</br>
    -Cámara de comercio</br>
    -RUT</br>
    -Cédula del representante legal</p>
    <button class="btn" id="btnEnter">INGRESA AQUÍ</button>
`;
  infoSection.innerHTML = loginSection;
  return infoSection;
};
