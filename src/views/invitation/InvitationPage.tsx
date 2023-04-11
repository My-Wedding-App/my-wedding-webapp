import React, { useEffect, useState } from "react";
import {
  Container, 
  Row,
  Col,
} from "react-bootstrap";
import JsPDF from 'jspdf';
import { getGuest } from "./action";
import './invitation-page.scss'
import { useParams } from "react-router-dom";
import Button from "../../component/Button";
import Invitation from "./components/Invitation";
import { Guest } from "../../types";
import Loading from "../../component/Loading";

const InvitationPage = () => {
  const { guestId } = useParams<{ guestId: string }>();
  const [ guest, setGuest ] = useState<Guest>({} as Guest);
  const [ loading, setLoading ] = useState<boolean>(true);

  const getGuestData = async () => {
    const guestData = await getGuest(guestId);
    setGuest(guestData);
    setLoading(false);
  }

  const downloadInvitation = () => {
    const invitation = new JsPDF('portrait', 'pt', 'a4');
    const element = document.querySelector('#invitation');
    invitation.html(element as HTMLElement).then(() => {
      invitation.save(`${guest.title} ${guest.name}.pdf`)
    })
  }

  useEffect(() => {
    getGuestData();
  })
  return (
    <Container>
      {loading ? <Loading /> : 
        <>
          <Row
            style={{
              paddingBlock: 10
            }}
          >
            <Col>
              <Button title="Download Invitation" onClick={downloadInvitation}/>
            </Col>
          </Row>
          <Invitation guest={guest}/>
        </>
      }
    </Container>
  );
}

export default InvitationPage;