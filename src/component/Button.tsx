import React from "react";
import { Button as ButtonComponent, Spinner } from "react-bootstrap";

interface ButtonProps {
  title: string;
  isLoading?: boolean;
  variant?: string;
  className?: string;
  type?: any;
  onClick?: (params?: any) => any;
}
const Button = ({ variant, title, isLoading, className, type, onClick }: ButtonProps) => {
  return (
    <ButtonComponent
      className={className}
      variant={variant}
      onClick={onClick ? onClick : () => {}}
      type={type ? type : undefined}
    >
      { isLoading ? 
      <Spinner 
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="false"
      /> : 
      null}
      {' '}
      {title}
    </ButtonComponent>
  )
}

export default Button;