
//using dom 
const question    = document.getElementById('question');
const options     = Array.from(document.getElementsByClassName("option-text"));
 presentQuestion = {};
 allowableAnswers = false;
 score = 0;
 questionIncrement = 0;
 availableQuestions = [];
 CORRECT_POINTS = 10;
 TOTAL_QUESTIONS = 3;


let questions = [

    {
       
        question:"Which of the following statement is/are correct about Favipiravir?",
        option1 : "Favipiravir is an antiviral COVID-19 drug.",
        option2 : "Glenmark Pharmaceuticals under the brand name FabiFlu has launched an antiviral drug Favipiravir",
        option3 : "It is India's first COVID-19 drug launched, priced at Rs 103 per tablet",
        option4 : "All the above are correct",
        answer  : "4"
    },
    
    { 
        question:"How many countries, areas or territories are suffering from novel coronavirus outbreak in the World?",
        option1 : "More than 50",
        option2 : "More than 100",
        option3 : "More than 150",
        option4 : "More than 200",
        answer  : "4"
    },
    
    { 
        question:"Thailand announced that it has proceeded to test its novel coronavirus vaccine on which animal/bird?",
        option1 : "Monkeys",
        option2 : " Lizards",
        option3 : "Hens",
        option4 : "Kites",
        answer  : "1"
    },
    

];


// const CORRECT_POINTS = 10;
// const TOTAL_QUESTIONS = 3;


startGame = () => { 
    questionIncrement = 0;
    score = 0;
    // this is called as spread operator which is used to distribute the number of questions in the array
    availableQuestions = [...questions];
    // console.log(availableQuestions);
    getNewQuestion();
    
 };

getNewQuestion = () => { 
    if(availableQuestions.length === 0 || questionIncrement >= TOTAL_QUESTIONS){ 
        return window.location.assign('/end.html')
     }
    questionIncrement++;


    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    presentQuestion     = availableQuestions[questionIndex];
    // console.log(presentQuestion);
    // shows the questions if we press that particular option
    question.innerText  = presentQuestion.question;
    // console.log(question.innerText);


    options.forEach(option => { 
        // displays the option number 1,2,3,4
        const number       = option.dataset['number'];
        // console.log(number);
        option.innerText   = presentQuestion['option' + number];
        


     });

     // splice is used because as we have given random operator,it should randomize the questions and should not repeat current questio
     availableQuestions.splice(questionIndex, 1);
   
     allowableAnswers = true;
    //  console.log(allowableAnswers)
    
 };


//iterating through options and adding event listener as when the user clicks it returns true if the answer is correct
options.forEach(option => { 
    option.addEventListener('click', e => { 
        if(!allowableAnswers) return;

        allowableAnswers = false;
        // console.log(allowableAnswers);
        // e.target is used to reference that particular option,and when the button is pressed it returns to it
        const selectedoption = e.target;
        // console.log(selectedoption)
        
        const selectedAnswer = selectedoption.dataset['number'];
        // console.log(selectedAnswer);
         

        // a CSS class is linked to it to add green if it is correct and red if it is wrong
        const classToApply = selectedAnswer == presentQuestion.answer ? "correct" : "incorrect";
        // console.log(classToApply);


        // if(classToApply === "correct"){  
        //     incrementScore(CORRECT_POINTS);
        // }
        // CSS classs is added  
        selectedoption.parentElement.classList.add(classToApply);
        // selectedoption.parentElement.classList.remove(classToApply);
        
        // At the moment the CSS class is correct and incorrect is removes it is moved to the nextquestion within 1s by calling out thus function
       setTimeout(() =>{  
           selectedoption.parentElement.classList.remove(classToApply);
           // The next question arrives using the questioncounter function
           getNewQuestion();
        },1000);




        // console.log(selectedAnswer === presentQuestion.answer);

        // getNewQuestion();
    
     });
 });


// incrementScore = num =>{ 
//     score += number;
//     scoreText.innerText = score;
//  }



 startGame();





 