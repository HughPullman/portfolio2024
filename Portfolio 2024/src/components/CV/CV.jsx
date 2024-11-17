import "./CV.scss";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { useEffect, useState } from "react";

const CV = ({ active }) => {
  const [contact, setContact] = useState("");

  useEffect(() => {
    if (active) {
      setContact("animate__animated animate__bounceInLeft");
    } else {
      setContact("animate__animated animate__bounceOutLeft");
    }
  }, [active]);

  const downloadFile = () => {
    const aTag = document.createElement("a");
    aTag.href = "/docs/HughPullmanCV.pdf";
    aTag.setAttribute("download", "HughPullmanCV.pdf");
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <div
      className={`cv ${contact}`}
      onClick={() => {
        downloadFile();
      }}
    >
      Download CV
      <FileDownloadIcon fontSize="large" />
    </div>
  );
};
export default CV;
