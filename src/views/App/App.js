import React, { useEffect, useState } from "react";
import { phonebook } from "../../data/Phonebook";
import './App.css'
import ContactCard from "../../components/ContactCard/ContactCard";
 function App() {
   const [contacts, setContacts] = useState(phonebook);
   const [searchterm, setsearchterm] =useState('')
   useEffect (() => {
   const filteredContacts =phonebook.filter((contact) =>{
   const name = contact.name.toLocaleLowerCase();
   const mobile = contact.mobile.toString();
   const qury =searchterm.toLocaleLowerCase();

   return (name.includes(qury) || mobile.includes(qury))

   })
   setContacts(filteredContacts);

   } ,[searchterm])
    return(
        <>
       
       <h1 className="text-center">Contact App</h1>
       <input type='text'placeholder='search' className="searchbar"
        value={searchterm}
        onChange={(e) => {setsearchterm(e.target.value)}}
        />
       <div className="contacts-container">
        {contacts.map((contact ,index) =>{
            const {name,mobile} =contact;


            return <ContactCard key ={index} name={name} mobile={mobile}/>
        } )}
       </div>
       {
        contacts.length === 0 ? <h2 className="text-center">No contact found</h2> : null
       }
       </>
    )
 }
 export default App