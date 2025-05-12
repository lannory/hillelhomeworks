import { useState } from "react"
import App from './App.jsx'
export default function Open (){
	const [value, setValue] = useState(0);

	return (
	<>
		<button onClick={()=> setValue(!value)}>Visit shop</button>
		<App class='shop' isOpened={value}/>
	</>
	)

}