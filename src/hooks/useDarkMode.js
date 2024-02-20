import React, { useEffect } from 'react'
import useTheme from '../context/QuizAppContext';

export default function useDarkMode() {

    const {theme, setTheme} = useTheme() 

    useEffect(() => {
        const localTheme = localStorage.getItem('theme');
        localTheme && setTheme({mode: localTheme});
      }, []);

      const toggleTheme = (e) => {
        const currentTheme = e.target.checked ? 'dark' : 'light';
        localStorage.setItem('theme', currentTheme)
        if (e.target.checked) setTheme({mode: 'dark'})  //dark      
        else setTheme({mode: 'light'}) //light         
      }

  return {theme, toggleTheme}
}
