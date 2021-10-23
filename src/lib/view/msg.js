export const messageInView = () => {
  const messageSection = document.createElement("section");
  messageSection.setAttribute('class', 'message-section');
  const messageView = `
    <p>Tu solicitud ha sido enviada con éxito. En los próximos días hábiles recibirás al correo electrónico información sobre tu cuenta.</p>
    <button class="btn" id="btnEnter">INGRESA AQUÍ</button>
  `;
  messageSection.innerHTML = messageView;
  return messageSection;
};