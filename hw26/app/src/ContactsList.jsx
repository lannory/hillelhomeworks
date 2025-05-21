import { useEffect, useState } from "react";
import './contacts.css'
import DeleteContact from "./DeleteContact";
export default function ContactsList (){

	const [allContacts, setAllContacts] = useState([])


	useEffect(() => {
		const requestData = async () =>{
			const response = await fetch('http://localhost:3000/contacts');
			const result = await response.json();

			setAllContacts(result);
		}
		requestData()
	}, [])

	return <div className='contact-menu'>
		{allContacts.map(item => <div className="contact-item" key={item.id}>
			<div>{item.name}</div>
			<div>{item.phone}</div>
			<DeleteContact id={item.id}/>
			{/* <button>edit</button> */}
		</div>)}
	</div>
}