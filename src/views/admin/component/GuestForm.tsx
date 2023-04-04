import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import Button from "../../../component/Button";
import { saveGuest } from "../action";

interface GuestForm {
  onCloseModal?: (params?: any) => any;
  onCreate?: (params?: any) => any;
}

const { Body, Header } = Card;
const { Label, Control, Check, Group, Select } = Form;

const GuestForm = ({ onCloseModal, onCreate }: GuestForm) => {
  const [loading, setLoading] = useState(false);

  const onFormSubmit = async (event: any) => {
    event.preventDefault();

    const { title, name, family, contact_no } = event.target;
    const guest_id = uuid();
    const wedding_id = 'wed_001';
  
    const guest = {
      invitationId: 'inv_001',
      title: title.value,
      name: name.value,
      family: family.value,
      contactNo: contact_no.value
    };
    
    setLoading(true);
    await saveGuest(guest, wedding_id, guest_id);
    onCloseModal ? onCloseModal() : null;
    onCreate ?  onCreate() : null;
    setLoading(false);

  }

  return (
    <Container className="mt-5">
      <Card>
        <Header>Add New Guest</Header>
        <Body>
          <Form onSubmit={onFormSubmit}>
            <Row>
              <Group controlId="title" as={Col} className="mb-3">
                <Label>Title</Label>
                <Select required>
                  <option>-- Select --</option>
                  <option value="Mr.">Mr.</option>
                  <option value="Mrs.">Mrs.</option>
                  <option value="Miss.">Miss.</option>
                </Select>
              </Group>
              <Group controlId="family" as={Col} className="mb-3">
                <Label>With Family</Label>
                <Check type="checkbox"/>
              </Group>
            </Row>
            <Row>
              <Group controlId="name" as={Col} className="mb-3">
                <Label>Name</Label>
                <Control type="text" placeholder="Name of the guest" required/>
              </Group>
              <Group controlId="contact_no" as={Col} className="mb-3">
                <Label>Contact number</Label>
                <Control type="number" placeholder="Name of the guest"/>
              </Group>
            </Row>
            <Button isLoading={loading} type="submit" variant="success" title="Submit"/>
          </Form>
        </Body>
      </Card>
    </Container>
  )
}

export default GuestForm;