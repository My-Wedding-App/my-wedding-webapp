import React, { useState } from "react";
import {
  Container,
  Button, 
  Row,
  Col,
  Form,
  InputGroup
} from "react-bootstrap";
import { getInvitation } from "./action";
import './invitation-page.scss'

const InvitationPage = () => {
  const [code, setCode] = useState<string>('');

  const onCodeChange = (event: any) => {
    setCode(event.target.value);
  }
  const onGetInvitation = async (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    await getInvitation(code);
  }
  return (
    <Container className="roomfac">
        <Row>
          <Col md={12} className="text-center">
            <Form onSubmit={(event) => onGetInvitation(event)}>
              <InputGroup className="mb-3" onChange={(event) => onCodeChange(event)}>
                <Form.Control
                  placeholder="Enter the code"
                  type="number"
                />
                <Button variant="outline-secondary" type="submit">
                  Get Invitation
                </Button>
              </InputGroup>
            </Form>
          </Col>
        </Row>
    </Container>
  );
}

export default InvitationPage;