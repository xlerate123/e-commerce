import React from "react";
import "./aboutSection.css";
import { Typography, Avatar } from "@material-ui/core";

const About = () => {

  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dv3iw1cln/image/upload/v1719163071/avatars/qp26qk5owcpjf0ileq68.jpg"
              alt="Founder"
            />

            <span>
              This is made by Nikhil Mohanty . 
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Motto</Typography>
            <p>Our motto is to provide quality tech products <br></br> and good customer service. Customers are<br></br> our first and foremost priority.</p>
            

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
