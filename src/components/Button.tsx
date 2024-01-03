import Alert from "./Alert"
import { useState } from "react";

interface Props{
    children: string;
    color: string;
    onClick: () => void;
}

const  Button = ({ children, onClick, color }: Props) => {
    return(
        <button type="button" className={"btn btn-" + color} onClick={onClick}>{children}</button>


    )
}

export default Button