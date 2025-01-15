import "./ContactDetails.scss";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useEffect, useState } from "react";

const ContactDetails = ({ active }) => {
  const [contact, setContact] = useState("");

  useEffect(() => {
    if (active) {
      setContact("animate__animated animate__bounceInLeft");
    } else {
      setContact("animate__animated animate__bounceOutLeft");
    }
  }, [active]);

  return (
    <div className={`contactDetails ${contact}`}>
      <span className="detailsTitle">Feel free to get in contact.</span>
      <div className="details">
        <span>
          <PersonIcon fontSize="large" />
          Hugh Pullman
        </span>
        <span>
          <LocationOnIcon fontSize="large" />
          United Kingdom, Manchester
        </span>
        <span>
          <LocalPhoneIcon fontSize="large" />
          +44 7475790110
        </span>
        <span>
          <EmailIcon fontSize="large" />
          hughpullman54@gmail.com
        </span>
      </div>
    </div>
  );
};
export default ContactDetails;
