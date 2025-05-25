import { useState } from 'react'
import './App.css';
import AddContact from './pages/AddContact';
import ContactsList from './pages/ContactsList';
import {BrowserRouter, Route, Routes, Link, useLocation} from 'react-router'
import { LanguageContext } from './contexts/Language';
import { ThemeContext } from './contexts/Theme';
import Login from './pages/Login';

function App() {


  const location = useLocation();

  const [language, setLanguage] = useState('EN');
  const [theme, setTheme] = useState('dark');

  const [contact, setContact] = useState([]);

  const changeLanguage = (e) =>{
    setLanguage(e.target.value)
    
  }

  const changeTheme = e => {
    setTheme(e.target.value);
    document.body.classList.remove(e.target.value === 'dark' ? 'light' : 'dark');
    document.body.classList.add(e.target.value === 'dark' ? 'dark' : 'light')
  }
  




  return (

    <ThemeContext.Provider value={theme}>
      <LanguageContext.Provider value={language}>
          {location.pathname !== '/' && <nav>
            <button className={theme === 'dark' ? 'dark' : 'light'}><Link to='/contacts'>{language === 'EN' ? 'Contacts' : 'Контакти'}</Link></button>
            <button className={theme === 'dark' ? 'dark' : 'light'}><Link to='/addContact'>{language === 'EN' ? 'Add new contact' : 'Додати контакт'}</Link></button>
            <select className={theme === 'dark' ? 'dark' : 'light'} onChange={changeLanguage} id="">
              <option value="EN">EN</option>
              <option value="UA">UA</option>
            </select>
            <select className={theme === 'dark' ? 'dark' : 'light'} onChange={changeTheme} id="">
              <option value="dark">dark</option>
              <option value="light">light</option>
            </select>
            </nav>}
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/contacts" element={<ContactsList setContact={setContact}/>}/>
            <Route path='/addContact' element={<AddContact currContact={{}}/>}/>
            <Route path='/editContact' element={<AddContact currContact={contact}/>}/>
          </Routes>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App
