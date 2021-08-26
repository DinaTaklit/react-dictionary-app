import React from 'react'
import { useGlobalContext } from '../../context'
import './Meanings.css'

function Meanings() {

    // Get the global application context
    const {meanings, word} = useGlobalContext()

    return (
        <div className="meanings">
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
                        return meanings.map(item => 
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
                                            def.example && (
                                                <span>
                                                    <b> Example: </b>
                                                    {def.example}
                                                </span>
                                            )
                                        }
                                        {
                                            
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
