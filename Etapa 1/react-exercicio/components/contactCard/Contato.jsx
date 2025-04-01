import React from "react";

export default function Contato( {contact} ) {
    return (
        <div>
            Nome: {contact.cName} <br/>
            Telefone: {contact.cPhone} <br/>
            Email: {contact.cEmail} <br/>
        </div>
    )
}