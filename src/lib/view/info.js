export const infoInView = () => {
  const infoSection = document.createElement('section');
  infoSection.setAttribute('class', 'info-section');
  const loginSection = `
    <p>Abre una cuenta para tu PYME de forma digital, fácil y sencilla.</p>
    <p>*Requisitos en formato PDF para continuar el proceso:</p>
    <ul>
      <li>Cámara de comercio</li>
      <li>RUT</li>
      <li>Cédula del representante legal</li>
    </ul>
    <button class="btn" id="btnEnter">INGRESA AQUÍ</button>
  `;
  infoSection.innerHTML = loginSection;
  return infoSection;
};
