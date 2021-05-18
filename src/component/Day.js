import dummy from "../db/data.json"
import { useParams } from "react-router-dom";
import Word from "../component/Word"

export default function Day() {
    //dummy.word

    const a = useParams();
    console.log(a)

    const wordlist = dummy.words.filter(words => words.day === Number(a.day))
    return    <>
        <h2> day {a.day}</h2>
        <table>
            <tbody>
                {
                    wordlist.map(word => 
                        (<Word word={word} key={word.id}/>
                            
                        ))}
            </tbody>
        </table>
    </>
}