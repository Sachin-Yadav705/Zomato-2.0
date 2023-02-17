import React from "react";

function ContactUs({ rest_details }) {
  return (
    <div>
      <h2 style={{ fontSize: "1.5rem", marginTop: "2rem" }}>
        {rest_details.address}
      </h2>
      <h3>Phone: {rest_details.contact_number}</h3>
    </div>
  );
}

export default ContactUs;
