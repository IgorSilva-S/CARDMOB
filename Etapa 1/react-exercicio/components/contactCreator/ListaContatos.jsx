import React, { useState } from "react";
import Contato from "../contactCard/Contato";
import './style.css'

export default function ListaContatos() {

    const [contacts, setContact] = useState([])
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [editingId, setEditingId] = useState(null)
    const [editingName, setEditingName] = useState('')
    const [editingPhone, setEditingPhone] = useState('')
    const [editingEmail, setEditingEmail] = useState('')


    // Create (1 of 4)
    const addContact = () => {
        if (name.trim() === '' || phone.trim() === '' || email.trim() === '') {
            alert('Preencha todas as informações do contato!')
            return
        }
        setContact([...contacts, { id: Date.now(), cName: name, cPhone: phone, cEmail: email }])
        setName('')
        setPhone('')
        setEmail('')
    }

    // Read or Report (2 of 4)
    const startEditing = (id, cname, cphone, cemail) => {
        setEditingId(id)
        setEditingName(cname)
        setEditingPhone(cphone)
        setEditingEmail(cemail)
    }

    // Update (3 of 4)
    const saveChanges = () => {
        setContact(
            contacts.map((contact) =>
                contact.id === editingId ? { ...contact, cName: name, cPhone: phone, cEmail: email } : contact
            ))
        setEditingId(null)
        setEditingName('')
        setEditingPhone('')
        setEditingEmail('')
    }

    // Delete (4 of 4)
    const deleteContact = (id) => {
        setContact(contacts.filter((contact) => contact.id !== id))
    }

    // Cancel editing
    const cancelEditing = () => {
        setEditingId(null);
        setEditingName('')
        setEditingPhone('')
        setEditingEmail('')
    }

    return (
        <>
            <div className="contactAdd">
                <h2>Adicionar um novo contato</h2>
                <img src='user.png'/>
                <div>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nome do contato"
                />
                <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Número de telefone"
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Endereço de email"
                />
                </div>

                <div className="cardFooter">
                    <button onClick={addContact}>Salvar contato</button>
                </div>
            </div>

            <div className="cardsView">
                {
                    contacts.map((contact) => (
                        <div key={contact.id} className="contactCard">
                            {
                                editingId === contact.id ? (
                                    <>
                                        <h2>Edite o seu contato</h2>
                                        <img src='user.png'/>
                                        <div>
                                        <input
                                            type="text"
                                            value={editingName}
                                            onChange={(e) => setEditingName(e.target.value)}
                                            placeholder="Nome do contato"
                                        />
                                        <input
                                            type="text"
                                            value={editingPhone}
                                            onChange={(e) => setEditingPhone(e.target.value)}
                                            placeholder="Número de telefone"
                                        />
                                        <input
                                            type="email"
                                            value={editingEmail}
                                            onChange={(e) => setEditingEmail(e.target.value)}
                                            placeholder="Endereço de email"
                                        />
                                        </div>

                                        <div className="cardFooter">
                                            
                                        <button onClick={saveChanges}>Salvar</button>
                                        <a href="#" onClick={cancelEditing}>Cancelar</a>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <h2>Contato</h2>
                                        <img src='user.png'/>
                                        <Contato contact={contact}/>
                                        <div className="cardFooter">
                                        <button onClick={() => startEditing(contact.id, contact.cName, contact.cPhone, contact.cEmail)}>Editar</button>
                                        <button onClick={() => deleteContact(contact.id)}>Deletar</button>
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