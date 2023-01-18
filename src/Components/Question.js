import React from 'react';
import Options from './Options';

function Question({dataq,QestionNo,totalQuestion,CheckAnswer,color}) {
    const {question,options}=dataq
  return (
    <div className="QuizQuestion-container">
      <h2>Qestion {QestionNo} out of {totalQuestion}</h2>
      <h4>{question}</h4>
      {
        options.map((item,index)=>{
          return <Options value={item} key={index} CheckAnswer={CheckAnswer} />
          
        })
      }
      

    </div>
  )
}

export default Question
