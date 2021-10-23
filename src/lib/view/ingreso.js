export const createLogInView = () => {
  const loginSection = document.createElement("section");
  loginSection.setAttribute('class', 'login-section');
  const loginView = `
  <p> Vista 2 </p>
`
  loginSection.innerHTML = loginView;

  
  return loginSection;
};

