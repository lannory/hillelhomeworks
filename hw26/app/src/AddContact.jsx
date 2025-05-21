import { useState } from 'react';
import './addContact.css';

export default function AddContact({changeRoute}){
	const [phone, setPhone] = useState('');
	const [name, setName] = useState('');

	function hadnleSave(){
		fetch('http://localhost:3000/contacts', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({id: Date.now(), name, phone})
		})
		changeRoute('Contacts');
	}

	return <>
		<form>
			<input placeholder="name" type='text' onChange={e => setName(e.target.value)}></input>
			<input placeholder="phone" type='phone' onChange={e => setPhone(e.target.value)}></input>
		</form>
		<div className="btns">
			<button onClick={hadnleSave}>Save</button>
			<button onClick={() => changeRoute('Contacts')}>Discard</button>
		</div>
	</>
}