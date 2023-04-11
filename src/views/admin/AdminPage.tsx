import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "../../component/Button";
import { getGuestList } from "./action";
import GuestModal from "./components/GuestModal";
import GuestTable from "./components/GuestTable";

const AdminPage = () => {
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [guestList, setGuestList] = useState<Promise<any>>();

  const columns = [
    {
      title: 'Title',
      key: 'title',
    },
    {
      title: 'Name',
      key: 'name',
    },
    {
      title: 'Contact No',
      key: 'contactNumber',
    },
    {
      title: 'Invitation',
      key: 'invitation',
    },
    {
      title: 'Message',
      key: 'message',
    }
  ];

  const getGuests = async () => {
    setLoading(true);
    const wedding_id = 'wed_001';
    const guests: any = await getGuestList(wedding_id);
    setGuestList(guests);
    setLoading(false);  
  }

  useEffect(() => {
    getGuests();    
  }, [])
  

  const handleClose = () => {
    setShow(false)
  };
  const handleShow = () => {setShow(true)};
  return (
    <Container className="mt-5">
      <Button variant="primary" title="Add New +" onClick={handleShow}/>
      <GuestModal size="xl" show={show} onHide={handleClose} onCreate={getGuests}/>
      {loading ? null : 
        <GuestTable columns={columns} guestList={guestList} />      
      }
    </Container>
  )
}

export default AdminPage;