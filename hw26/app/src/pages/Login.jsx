import { useState } from "react"
import { useNavigate } from "react-router";

export default function Login (){
	const [login, setLogin] = useState(''),
		[password, setPassword] = useState(''),
		[message, setMessage] = useState('');	
	
	const navigate = useNavigate();

	const submitLogin = () =>{
		if(login === 'admin' && password === 'admin'){
			navigate('/contacts');
		}else{
			setMessage('Wrong password or login')
		}
	}

	return <>
	<form action="">
		<input type="text" placeholder="login" onChange={(e) => setLogin(e.target.value)}/>
		<input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
		<button type='submit' onClick={submitLogin}>Submit</button>
		<p>{message}</p>
	</form></>
}