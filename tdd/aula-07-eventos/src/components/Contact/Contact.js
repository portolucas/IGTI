import React from "react";
import Map from "./Map";

const Contact = ({ name, email, site, center }) => {
  return (
    <div>
      <address>
        Contact {name} via{" "}
        <a data-testid="email" href={"mailto:" + email}>
          email
        </a>
        or on their{" "}
        <a data-testid="site" href={site}>
          website
        </a>
        .
      </address>
      <Map center={center} />
    </div>
  );
};

export default Contact;
