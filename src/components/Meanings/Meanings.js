import React from 'react'
import { useGlobalContext } from '../../context'
import './Meanings.css'

function Meanings() {

    // Get the global application context
    const {meanings, word} = useGlobalContext()

    return (
        <div className="meanings">
            {
                // Audio
                meanings[0] && word &&(
                    <audio
                        style={{ backgroundColor: "#fff", borderRadius: 10 }}
                        src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
                        controls
                  >
                    Your browser does not support the audio element.
                  </audio>
                )
                // /Audio
            }
            
            {
                word === "" ? (
                    <span
                        className="subTitle"
                    >
                        Start by typing a word in search
                    </span>
                ) : (
                    meanings.map(meaning =>{
                        const {meanings} = meaning
                        // loop throw the list of meaning
                        return meanings.map(item => 
                                // loop throw the list of definition
                                item.definitions.map( def => 
                                    <div
                                        className="singleMean"
                                        style={{
                                            backgroundColor: 'white',
                                            color:'black'
                                        }}
                                    >
                                        <b>{def.definition}</b>
                                        <hr 
                                            style={{
                                                backgroundColor:'black',
                                                width:'100%',
                                            }}
                                        />
                                        {
                                            // Display example if there is any
                                            def.example && (
                                                <span>
                                                    <b> Example: </b>
                                                    {def.example}
                                                </span>
                                            )
                                        }
                                        {
                                            // Display synonyms if there is any
                                            def.synonyms.length !==0 && (
                                                <span>
                                                    <b> Synonyms: </b>
                                                    { def.synonyms.map(s =>`${s},`) }
                                                </span>
                                            )
                                          
                                        }
                                    </div>
                                
                            ))
                    })
                )
            }
        </div>
    )
}

export default Meanings
