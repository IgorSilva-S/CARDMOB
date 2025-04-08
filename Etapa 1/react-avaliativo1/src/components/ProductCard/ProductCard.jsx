import React from "react";

export default function ProductCard( {prod} ) {
    return (
        <div>
            Nome: {prod.pName} <br/>
            Valor: {prod.pPrice} <br/>
            <button class="addButton">Adicionar ao carrinho</button>
        </div>
    )
}