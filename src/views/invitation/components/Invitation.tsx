import React from "react";
import { Guest } from "../../../types";

type InvitationData = {
  guest: Guest;
}

const Invitation = (props: InvitationData) => {
  const { guest } = props;

  return (
    <div
      id="invitation"
      style={{
        textAlign: 'center',
        width: '600px'
      }}
    >
      <h1>Invitation</h1>
      <h4>Mr. & Mrs. Alwis</h4>
      <h4>Together with</h4>
      <h4>Mr. & Mrs. Peiris</h4>
      <h4>Request the pleasure if yours</h4>
      <h4>Company of</h4>
      <h2>{guest.title} {guest.name}</h2>
      <h4>At the marriage of their loving children</h4>
      <br></br>
      <h1>Shashini & Asitha</h1>
      <br></br>
      <h1>JULY | 27th | 2023</h1>
      <h2>from 10.00AM to 4.00PM</h2>
      <h5>@</h5>
      <h2>Hotel Green Court Homagama</h2>
      <br></br>
      <h6>(Poruwa ceremony at 10.00AM)</h6>
    </div>
  );
}

export default Invitation;