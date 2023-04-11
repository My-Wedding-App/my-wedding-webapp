import React from "react";
import { Container } from "react-bootstrap";
import Table from "../../../component/Table";

const GuestTable = (props: any) => {  
  return (
    <Container>
      <Table columns={props.columns} data={props.guestList as any}/>
    </Container>
  )
}

export default GuestTable;