export const messageInView = () => {
  const messageSection = document.createElement("section");
  messageSection.setAttribute('class', 'message-section');
  const messageView = `
    <p class="message">Tu solicitud ha sido enviada con éxito. En los próximos días hábiles recibirás al correo electrónico información sobre tu cuenta.</p>
  `;
  messageSection.innerHTML = messageView;
  return messageSection;
};
