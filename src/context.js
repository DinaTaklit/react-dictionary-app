import axios from 'axios'
import React, {useContext, useState, useEffect} from 'react'

const AppContext = React.createContext()

export const AppProvider = ({children}) => {

    // State for typed word
    const [word, setWord] = useState("")
    // State for the selected category
    const [category, setCategory] = useState("en")
    // State for list of meanings 
    const [meanings, setMeanings] = useState([])
    // State to switch between dark/light mode
    const [darkMode, setDarkMode] = useState(true)

    // Function that fetch meanings from the dictionary
    const fetchMeanings = async () => {
        try {
            const {data} = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`)
            setMeanings(data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext)
