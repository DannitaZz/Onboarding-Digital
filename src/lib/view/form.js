
export const formInView = () => {
  const formSection = document.createElement("section");
  formSection.setAttribute('class', 'form-section');
  const formView = `
  <p> Vista 3 </p>
`
  formSection.innerHTML = formView;

  
  return formSection;
};