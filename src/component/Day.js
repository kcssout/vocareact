
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Word from "../component/Word"

export default function Day() {
    
    const {day} = useParams();
    const [words, setWords] = useState([]);

    useEffect(() => {

        fetch(`http://localhost:3001/words?day=${day}`)
        .then(res=> {
            return res.json()
        })
        .then(data => {

            setWords(data);
        })
    }, [day]);


    return    <>
        <h2> day {day}</h2>
        <table>
            <tbody>
                {
                    words.map(word => 
                        (<Word word={word} key={word.id}/>
                            
                        ))}
            </tbody>
        </table>
    </>
}