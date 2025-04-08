import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import './style.css'

export default function ProductList() {

    const [products, setProduct] = useState([])
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [editingId, setEditingId] = useState(null)
    const [editingName, setEditingName] = useState('')
    const [editingPrice, setEditingPrice] = useState('')


    // Create (1 of 4)
    const addProd = () => {
        if (name.trim() === '' || price.trim() === '') {
            alert('Preencha todas as informações básicas')
            return
        }
        setProduct([...products, { id: Date.now(), pName: name, pPrice: price }])
        setName('')
        setPrice('')
        console.log({ id: Date.now(), pName: name, pPrice: price })
    }

    // Read or Report (2 of 4)
    const startEditing = (id, pname, pprice) => {
        setEditingId(id)
        setEditingName(pname)
        setEditingPrice(pprice)
    }

    // Update (3 of 4)
    const saveChanges = () => {
        setProduct(
            products.map((product) =>
                product.id === editingId ? { ...product, pName: editingName, pPrice: editingPrice } : product
            ))
        setEditingId(null)
        setEditingName('')
        setEditingPrice('')
    }

    // Delete (4 of 4)
    const delProd = (id) => {
        setProduct(products.filter((product) => product.id !== id))
    }

    // Cancel editing
    const cancelEditing = () => {
        setEditingId(null);
        setEditingName('')
        setEditingPrice('')
    }

    return (
        <>
            <div className="contactAdd">
                <h2>Adicionar um novo produto</h2>
                <img src="https://www.svgrepo.com/show/231100/shopping-cart.svg"/>
                <div>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nome do produto"
                />
                <input
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Valor do produto"
                />
      
                </div>

                <div className="cardFooter">
                    <button onClick={addProd}>Salvar produto</button>
                </div>
            </div>

            <div className="cardsView">
                {
                    products.map((product) => (
                        <div key={product.id} className="contactCard">
                            {
                                editingId === product.id ? (
                                    <>
                                        <h2>Edite o seu produto</h2>
                                        <img src="https://www.svgrepo.com/show/231100/shopping-cart.svg"/>
                                        <div>
                                        <input
                                            type="text"
                                            value={editingName}
                                            onChange={(e) => setEditingName(e.target.value)}
                                            placeholder="Nome do produto"
                                        />
                                        <input
                                            type="text"
                                            value={editingPrice}
                                            onChange={(e) => setEditingPrice(e.target.value)}
                                            placeholder="Valor do produto"
                                        />
                                        </div>

                                        <div className="cardFooter2b">
                                            
                                        <button onClick={saveChanges}>Salvar</button>
                                        <a href="#" onClick={cancelEditing}>Cancelar</a>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <h2>Produto</h2>
                                        <img src="https://www.svgrepo.com/show/231100/shopping-cart.svg"/>
                                        <ProductCard prod={product}/>
                                        <div className="cardFooter2b">
                                        <button onClick={() => startEditing(product.id, product.pName, product.pPrice)}>Editar</button>
                                        <button onClick={() => delProd(product.id)}>Deletar</button>
                                        </div>
                                    </>
                                )
                            }
                        </div>
                    ))
                }
            </div>
        </>
    )
}