const resumePath = `${import.meta.env.BASE_URL}mahfuz_resume002.pdf`;

export const viewResume = () => {
  const link = document.createElement("a");
  link.href = resumePath;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const downloadResume = () => {
  const link = document.createElement("a");
  link.href = resumePath;
  link.download = "resume_mahfuz.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default downloadResume;