import React from "react";
import { Table as TableComponent } from "react-bootstrap";

type Column = {
  title: string,
  key: string
}

type Table = {
  columns: Column[],
  data: any[]
}

const Table = (props: Table) => {

  const getInvitationLink = (guest: any) => {
    return `${process.env.WEB_APP_URL}/${guest.guestId}`;
  }

  return (
    <TableComponent className="mt-5" striped bordered hover>
      <thead>
        <tr>
          {props.columns.map(column => (
            <th key={column.key}>{column.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.data.map((guest: { title: string; name: string; contactNo: string; guestId: string; }, key) => (
          <tr  key={key}>
            <td>{guest.title}</td>
            <td>{guest.name}</td>
            <td>{guest.contactNo}</td>
            <td>
              <a href={getInvitationLink(guest)} target="_blank">view</a>
            </td>
          </tr>
        ))}
      </tbody>      
    </TableComponent>
  )
}

export default Table;