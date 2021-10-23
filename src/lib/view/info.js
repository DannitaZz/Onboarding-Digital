export const infoInView = () => {
  const infoSection = document.createElement('section');
  infoSection.setAttribute('class', 'info-section');
  const loginSection = `
  <p> Vista 1 </p>
`
  infoSection.innerHTML = loginSection;
  return infoSection;
};