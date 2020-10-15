import React,{useState,useEffect} from 'react';
import fetchData from './services/Quizapi';
import DisplayQuestions from './components/DisplayQuestions'
import {quizResultArrayObjTypes} from './services/types/Types'
import Options from './components/Options'
import {optionObj} from './services/types/Types'

import InitNotification from './services/firebaseService'
import SelectQuiz from './components/QuizDifficulty'
import QuizTypes from './components/QuizTypes'
import './App.css';


function App() {
const [quizQuestions,setQuizQuestions]=useState<quizResultArrayObjTypes[]>([])
const [questionNumber,setQuestionNumber]=useState(0)
const [quizCat,setQuizCat]=useState(0)
const [options,setOptions]=useState<optionObj>({error:false,loading:false,finish:false,quizType:true,quizDiff:false})
const [countCorrect,setCountCorrect]=useState(0)
const [totalQuestions,setTotalQuestions]=useState(0)
const [bgImg,setBgImg]=useState('')

function shuffle(array:string[]):string[] {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}




  function getQuiz(url:string){
    async function quizApiResult(){
      
      
        const quizApiResult=await fetchData(url)
        if(quizApiResult.length===0){
            setOptions({
              ...options,
              error:true,
              loading:false,
              quizDiff:false,
              
        })
        }
        else{
            var questionType=quizApiResult.map((obj: quizResultArrayObjTypes)=>{
              obj.incorrect_answers.push(obj.correct_answer)
              obj.incorrect_answers=shuffle(obj.incorrect_answers)
              return(
                  obj.type
              )
          })
          if(questionType[0]==='multiple'){
            
            setQuizQuestions(quizApiResult)
          }
          
          setOptions({
            ...options,
            loading:false,
            quizDiff:false
          })
        }
      
    }
    quizApiResult()
  }
  

   function checkAnswer(ans:string){
     if(quizQuestions[questionNumber].correct_answer===ans){
       setCountCorrect(countCorrect+1)
       
     }
     
    if(totalQuestions===(questionNumber+1)){
      
         setOptions({
           ...options,
           finish:true,
          })
        }
        
          setQuestionNumber(questionNumber+1)
        
        
        
        
      
  }
   
   function Category(CatNum:number,img:string){
     
    
    

      setQuizCat(CatNum)
      setBgImg(img)
      setOptions({
        ...options,
        quizType:false,
        quizDiff:true,
      })
      
   }
   
   function Selection(difficulty:string,no:number){
    
     const url=`https://opentdb.com/api.php?amount=${no}&category=${quizCat}&difficulty=${difficulty}&type=multiple`
     setTotalQuestions(no)
     
     setOptions({
       ...options,
       loading:true,
       quizDiff:false,
     })
     getQuiz(url)
   }
   
   useEffect(()=>{
     
     async function getToken(){
       
     InitNotification()
     
     }
     
     getToken()
     
   },[])
  
  

  return (
    <div>
            <header>
             <h1>Quiz</h1>
           </header>
           <div className="bg">
            <img src={bgImg}
            alt=""
            id="bg_img"
            />
            </div>
           
         
        
        <QuizTypes  Category={Category} options={options}/>
        <SelectQuiz Selection={Selection} options={options}/>
        <DisplayQuestions questions={quizQuestions}
        checkAnswer={checkAnswer}
        index={questionNumber}
        />
        <Options options={options} correctAns={countCorrect} 
        totalQ={totalQuestions}/>
        
        <div id='token_div'>
        </div>
    </div>
  );
}

export default App;
