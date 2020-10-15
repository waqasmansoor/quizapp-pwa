import React from 'react'
import {optionObj} from '../services/types/Types'
import './Options.css'

const Options:React.FC<{options:optionObj;correctAns:number;totalQ:number}>=({options,correctAns,totalQ})=>{
    
    function refreshPage(){
        window.location.reload()
    }
    
    if(options.error){

        return(
            <div>
                <h3>
                    Sorry, Quiz Not Available
                </h3>
            </div>
        )
    }
    if(options.loading){
        return(
            <div>
                <h3>
                    Loading
                </h3>
            </div>
        )
    }
    if(options.finish){
        return(
            <div className="score">
                <h1>
                You score {correctAns} out of {totalQ} .
                </h1>
                <div className="tryagain" onClick={refreshPage}>
                    <span>Try Again</span>
                </div>
            </div>
        )
    }
    return(
        <div></div>

    )
}

export default Options