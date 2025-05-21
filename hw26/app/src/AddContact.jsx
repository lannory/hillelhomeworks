import { useState } from 'react';
import './addContact.css';

export default function AddContact({changeRoute, currContact}){
	const [phone, setPhone] = useState(currContact.phone ? currContact.phone : '');
		const [name, setName] = useState(currContact.name ? currContact.name : '');

	function hadnleSave(){
		if(Object.keys(currContact).length > 0){
			fetch('http://localhost:3000/contacts', {
				method: 'PATCH',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({id: currContact.id, name, phone})
			});
		}else{
			fetch('http://localhost:3000/contacts', {
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({id: Date.now(), name, phone})
			});
		}
		
		changeRoute('Contacts');
	}

	return <>
		<form>
			<input placeholder="name" type='text' value={name} onChange={e => setName(e.target.value)}></input>
			<input placeholder="phone" type='phone' value={phone} onChange={e => setPhone(e.target.value)}></input>
		</form>
		<div className="btns">
			<button onClick={hadnleSave}>Save</button>
			<button onClick={() => changeRoute('Contacts')}>Discard</button>
		</div>
	</>
}