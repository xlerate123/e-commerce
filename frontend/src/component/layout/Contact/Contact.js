import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
<div className="contactContainer">
      <div className="contactDetails">
        <a className="mailBtn" href="mailto:nikhilmohanty443@gmail.com">
          <Button>Email: nikhilmohanty443@gmail.com</Button>
        </a>
        <div className="phone">
          <Button>Phone: +91 8328944109</Button>
        </div>
        <div className="address">
          <Button>Address: Near Shree dham complex,Asha kiran Road , Bargarh</Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
