import React from 'react'

export type quizResultArrayObjTypes={
    category:string
    correct_answer:string
    difficulty:string
    incorrect_answers:string[]
    question:string
    type:string

}

export type optionObj={
    error:boolean
    loading:boolean
    finish:boolean
    quizType:boolean
    quizDiff:boolean
}