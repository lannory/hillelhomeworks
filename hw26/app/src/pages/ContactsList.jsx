import { useContext, useEffect, useState } from "react";
import '../contacts.css'
import DeleteContact from "../DeleteContact";
import { useNavigate } from "react-router";
import { LanguageContext } from "../contexts/Language";
import { ThemeContext } from "../contexts/Theme";
export default function ContactsList ({setContact}){

	const [allContacts, setAllContacts] = useState([])

	const language = useContext(LanguageContext);

	const theme = useContext(ThemeContext);

	const navigate = useNavigate();
	const requestData = async () =>{
		const response = await fetch('http://localhost:3000/contacts');
		const result = await response.json();
			setAllContacts(result);
	}
	useEffect(() => {
		requestData()
	}, [])

	return <div className='contact-menu'>
		{allContacts.map(item => <div className="contact-item" key={item.id}>
			<div>{item.name}</div>
			<div>{item.phone}</div>
			<DeleteContact id={item.id} getData={requestData}/>
			<button className={theme === 'dark' ? 'dark' : 'light'} onClick={() => {navigate('/editContact'); setContact(item)}}>{language === 'EN' ? 'edit' : 'змінити'}</button>
		</div>)}
	</div>
}