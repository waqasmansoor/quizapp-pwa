import React, { useState } from 'react'
import { quizResultArrayObjTypes } from '../services/types/Types'

import './DisplayQuestions.css'






const DisplayQuestions: React.FC<{ questions: quizResultArrayObjTypes[], index: number, checkAnswer: (ans: string) => void }> = ({ questions, checkAnswer, index }) => {
    
    
    const [displayButton,setDisplayButton]=useState(false)
    const [selected,setSelected]=useState(-1)
    
    
    
    const handleChange = (j:number) => {
        setDisplayButton(true)
        
        
        setSelected(j)
        
    }
    const handleClick = () => {
        
        if(displayButton){

            setDisplayButton(false)
            setSelected(-1)
            checkAnswer(questions[index].incorrect_answers[selected])
        }
        
        
        
    }
    
    if (questions.length === 0 || questions[index]===undefined) {
        
        
            return(
                <div>

                </div>
            )
        
        
    }


    return (
        <div className="question_paper">
            <div className='page'>
                <div className="question_no">
                    <span>Question No {index}</span>
                </div>
                <h2> {questions[index].question}</h2>

                <ul>
                    {questions[index].incorrect_answers.map((options: string, j: number) => {
                        return (
                            <li key={j}>
                                
                                <div onClick={()=>handleChange(j)}>
                                    <label className={`label ${selected===j?"label--selected":" "}`}>{options}</label>
                                    <div className={`option ${selected===j?"option--selected":" "}`}></div>
                                    <div className={selected===j?'selected':'unselected'}></div>
                                </div>
                            
    
                    
                            
                            </li>  
                    )})}

                </ul>
                <div className="button_container">
                    <div className={`next_button ${displayButton?"next_button_display":""}`}
                    onClick={handleClick}
                    >Next</div>
                </div>
            </div>
                
        </div>
    );
}
export default DisplayQuestions;

