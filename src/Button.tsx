import React, {HTMLAttributes, ReactNode} from "react";
import styled from "@emotion/styled";

export interface ButtonType extends HTMLAttributes<HTMLButtonElement>{
    /** Provide a text for the button */
    children: ReactNode;

    /** Which variant look would you like use */
    variant: 'primary' | 'secondary';

    onClick?: () => void;
}

/** This is a special button!!! */
export const Button = ({children, variant='primary', ...props}: ButtonType) => {
    return (
        <Btn variant={variant} {...props}>
            <span>{children}</span>
        </Btn>
    )
}

const Btn = styled.button<{variant:string}>`
   color: ${props => props.variant === "primary" ? "hotpink" : "blue"};
   font-size: 20px;
`
