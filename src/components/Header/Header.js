import { MenuItem, TextField, createTheme, ThemeProvider } from '@material-ui/core'
import React from 'react'
import { useGlobalContext } from '../../context'
import countries from '../../category'
import './Header.css'

function Header() {
    // Get global state
    const {word, setWord, category, setCategory, setMeanings,darkMode} = useGlobalContext()

    // Functiokn that handle the change of the selected language
    const handleChange = (event) => {
        setCategory(event.target.value)
        setMeanings([])
    }

    // Creatr the theme
   const darkTheme = createTheme({
        palette: {
            primary:{
                main: darkMode ? '#fff' : '#000'
            },
            type: darkMode ? 'dark' : 'light'
        },
   })


    return (
        <div className="header">
            <span className="title">
                {word ? word : 'Word Hunt'}
            </span>
            <div className="inputs">
                <ThemeProvider theme={darkTheme}>
                    <TextField
                        className="search"
                        label="search a Word"
                        onChange={(e) => setWord(e.target.value)}
                    >
                    </TextField>
                    <TextField
                        select
                        label="Language"
                        value={category}
                        onChange={(e) => handleChange(e)}
                        className='select'
                    >
                        {
                            countries.map((country) => (
                                <MenuItem 
                                    key={country.label} 
                                    value={country.label}
                                >
                                    {country.value}
                                </MenuItem>
                            ))
                        }
                    </TextField>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header
