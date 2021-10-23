export const messageInView = () => {
    const messageSection = document.createElement("section");
    messageSection.setAttribute('class', 'message-section');
    const messageView = `
    <p> Vista 5 </p>
  `;
    messageSection.innerHTML = messageView;
  
    
    return messageSection;
  };