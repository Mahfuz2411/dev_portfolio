
const downloadResume = () => {
  const link = document.createElement("a");
  link.href = "/dev_portfolio/mahfuz_resume.pdf";     // 🔥 IMPORTANT
  link.download = "resume_mahfuz.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
export default downloadResume;