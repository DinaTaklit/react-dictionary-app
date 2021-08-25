import { MenuItem, TextField } from '@material-ui/core'
import React from 'react'
import { useGlobalContext } from '../../context'
import countries from '../../category'
import './Header.css'

function Header() {
    // Get global state
    const {word, setWord, category, setCategory, setMeanings} = useGlobalContext()

    const handleChange = (event) => {
        setCategory(event.target.value)
        setMeanings([])
    }

    return (
        <div className="header">
            <span className="title">
                {word ? word : 'Word Hunt'}
            </span>
            <div className="inputs">
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
            </div>
        </div>
    )
}

export default Header
