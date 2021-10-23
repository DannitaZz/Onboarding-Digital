export const uploadInView = () => {
    const uploadSection = document.createElement("section");
    uploadSection.setAttribute('class', 'upload-section');
    const uploadView = `
    <p> Vista 4 </p>
  `;
    uploadSection.innerHTML = uploadView;
  
    
    return uploadSection;
  };