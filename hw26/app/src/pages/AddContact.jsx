import { useContext, useState } from 'react';
import '../addContact.css';
import { useNavigate } from 'react-router';
import { LanguageContext } from '../contexts/Language';
import { ThemeContext } from '../contexts/Theme';

export default function AddContact({currContact}){

	const navigate = useNavigate();

	const language = useContext(LanguageContext);
	const theme = useContext(ThemeContext);


	const [phone, setPhone] = useState(currContact.phone || '');
		const [name, setName] = useState(currContact.name || '');

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
		
		navigate('/contacts')
	}

	return <>
		<form>
			<input className={theme === 'dark' ? 'dark' : 'light'} placeholder="name" type='text' value={name} onChange={e => setName(e.target.value)}></input>
			<input className={theme === 'dark' ? 'dark' : 'light'} placeholder="phone" type='phone' value={phone} onChange={e => setPhone(e.target.value)}></input>
		</form>
		<div className="btns">
			<button className={theme === 'dark' ? 'dark' : 'light'} onClick={hadnleSave}>{language === 'EN' ? 'Save' : 'Зберегти'}</button>
			<button className={theme === 'dark' ? 'dark' : 'light'} onClick={() => navigate('/contacts')}>{language === 'EN'? 'Discard' : 'Скасувати'}</button>
		</div>
	</>
}