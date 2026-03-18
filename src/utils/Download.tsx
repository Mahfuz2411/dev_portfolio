
const downloadResume = () => {
  const link = document.createElement("a");
  link.href = `${import.meta.env.BASE_URL}mahfuz_resume001.pdf`;
  link.download = "resume_mahfuz.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
export default downloadResume;