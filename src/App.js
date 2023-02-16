import { id } from "ethers/lib/utils.js";
import React, {useState, useEffect} from "react"
import Question from "./Question"
import Result from "./Result"
import './index.css'; //czy tylko tak zaimportowac

const App = () => {


    const[score,setScore] = useState(0);
    const[index,setIndex] = useState(0);
    useEffect(() => {}, [index,score]) //czy to dziala i czy re renderuje automatycznie

    const questions = [{
        question:"Is your daily Screen time higher than 5h per day",
        points:1,
    },
    {
        question:"Do you use tik tok?",
        points:1,
    }, 
    {
        question:"Are you a women?",
        points:1,
    },
    {
        question:"Do you use your phone more than laptop?",
        points:1,
    }]

    const handlerAnws = (anwser) => {
        if(anwser){
            setScore(score+questions[index].points);
        }
        else{

        }

        setIndex(i => i + 1);
    }

    if(index < questions.length){
        return(
            <div id="main">
                <Question question={questions[index]}/>
                <button className="yes" onClick={handlerAnws(true)}>yes</button>
                <button className="no" onClick={handlerAnws(false)}>no</button>
            </div>
        );
    }
    else{
        return(
            <div id="main">
                <Result score={score}/>
            </div>
        );
    }

}

export default App;