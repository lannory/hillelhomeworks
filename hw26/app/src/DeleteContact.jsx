import { useContext } from "react";
import { LanguageContext } from "./contexts/Language";
import { ThemeContext } from "./contexts/Theme";

export default function DeleteContact ({id, getData}){

	const language = useContext(LanguageContext);
	const theme = useContext(ThemeContext);

	const handleDelete = async () =>
	{	
		fetch(`http://localhost:3000/contacts/${id}`, {
			method: 'DELETE',
		});
		getData()
	}
	return <button className={theme === 'dark' ? 'delete dark' : 'delete light'} onClick={handleDelete}>{language === 'EN' ? 'Delete' : 'Видалити'}</button>
}