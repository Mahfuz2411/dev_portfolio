const resumePath = `${import.meta.env.BASE_URL}resume003.pdf`;

export const viewResume = () => {
  window.open(resumePath, "_blank", "noopener,noreferrer");
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