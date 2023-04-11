import React, { ElementType } from "react";
import { Button as ButtonComponent, Container, Spinner } from "react-bootstrap";

interface LoadingProps {
  as?: "span";
  animation?: "border" | "grow" | undefined;
  size?: 'sm';
  role?: string;
  ariaHidden?: boolean;
}
const Loading = ({ as, animation, size,  role, ariaHidden }: LoadingProps) => {
  return (    
    <Container className="roomfac">
      <Spinner 
        as={as}
        animation={animation}
        size={size}
        role={role ? role : "status"}
        aria-hidden={ariaHidden}
      /> 
    </Container>
  )
}

export default Loading;