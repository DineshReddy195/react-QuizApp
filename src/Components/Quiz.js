import Question from "./Question";
import React, { useState, useEffect } from "react";


function Quiz() {
   
  let setQuestions = [
    {
      question: "What is the capital of India",
      options: ["Rajasthan", "Mumbai", "Delhi", "Banglore"],
      answer: "Delhi",
      score: -1
    },
    {
      question: "What is the capital of Karnataka",
      options: ["Bhopal", "Gwalior", "Bangalore", "Indore"],
      answer: "Bangalore",
      score: -1
    },
    {
      question: "What is the capital of Maharastra",
      options: ["Nagpur", "Mumbai", "Pune", "Nasik"],
      answer: "Mumbai",
      score: -1
    },
    {
      question: "What is the capital of Telangana",
      options: ["Mirjapur", "Agra", "Rurki", "Hyderabad"],
      answer: "Hyderabad",
      score: -1
    },
    {
      question: "what is the capital of Goa",
      options: ["Panaji", "Chennai", "Dispur", "Hyderabad"],
      answer: "Panaji",
      score: -1
    }
  ];
  function jumble(info) {
    alert("Click on text in the option to have a good experience")
    let currentIndex = info.length,
      randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [info[currentIndex], info[randomIndex]] = [
        info[randomIndex],
        info[currentIndex]
      ];
    }

    return info;
  }

  useEffect(() => {
    jumble(setQuestions);
    setPresentQuestion({
      data: setQuestions[0],
      s_no: 1
    });
    console.log(setQuestions);
  }, []);

  const [presentQuestion, setPresentQuestion] = useState({
    data: {
      question: "what is the capital of UK(uttarakhand)",
      options: ["Dehradun", "Mesoor", "Rurki", "banglore"],
      answer: "Dehradun",
      score: -1
    },
    s_no: 1
  });
  const CheckAnswer = (value) => {
    setTimeout(() => {
      if (presentQuestion.data.answer === value) {
       
       
        var para=document.createElement('h4');
        document.body.appendChild(para);
        para.style.color="green";
        para.innerText=`Your answer is correct`
        setScore((previousValue) => previousValue + 5);
        
        setSubmit((previousValue) => {
          previousValue.push(true);
          return previousValue;


        });
      } else {
        var heading=document.createElement('h4');
        document.body.appendChild(heading);
        heading.style.color="red";
        heading.innerText="Your answer is incorrect";
     

        setSubmit((previousValue) => {
          previousValue.push(true);
          return previousValue;
        });
      }
      if (presentQuestion.s_no === setQuestions.length) {
        setQuizStatus(0);
      }
      setPresentQuestion((previousValue) => {
        return {
          data: setQuestions[previousValue.s_no],
          s_no: previousValue.s_no + 1
        };
      });
    },1000);
  };

  const [score, setScore] = useState(0);
  const [submit, setSubmit] = useState([]);
  const [quizStatus, setQuizStatus] = useState(1);


  return (
    <div className="Quiz-container">
      <h2>React Quiz</h2>
      <p>Current Score : {score}</p>
      {quizStatus ? (
        <Question
          dataq={presentQuestion.data}
          QestionNo={presentQuestion.s_no}
          totalQuestion={setQuestions.length}
          CheckAnswer={CheckAnswer}
         
        />
      ) : (
        <div>Quiz ended</div>
      )}
    </div>
  );
}
export default Quiz;