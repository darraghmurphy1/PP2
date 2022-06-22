const question = document.getElementsById('question');
const choices = array.from(document.getElementsByClassName('answer-text'));

let thisQuestion = {}
let correctAnswer = true
let startingScore = 0
let questionTrack = 0
let theQuestions = []



const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
let answerButtons = document.getElementsByClassName('answer-btn');

let startingIncorrectScore=0;
let currentQuestionIndex=0;



/* adding an event listener for the start button */

document.startButton.addEventListener('click', startQuiz);

function startQuiz () {
  questionTrack=0
  startingScore=0
  theQuestions= [...questions]
  nextQuestion()
}

function nextQuestion () {
  const questionsIndex = Math.floor(Math.random() * theQuestions.length)
  thisQuestion =  theQuestions[questionsIndex]
  question.innerText = thisQuestion.question
  
  answers.forEach(answer => {
    const number = choice.dataset['number']
    answer.innerText = thisQuestion ['answer' + number]

    theQuestions.splice(questionsIndex, 1)

    acceptedAnswers = true

    answers.forEach(answer => {
      answer.addEventListener('click' e => {
        if(!acceptedAnswers) return

        acceptedAnswers = false 
        const selectedOption = e.target
        const selectedAnswer = selectedOption.dataset['number']
        

        let classToApply = selectedAnswer == thisQuestion.answer ? 'correct' : 'incorrect'

        if (classToApply=== 'correct') {
        
          incrementScore(SCORE_POINTS)  /* not defined yet */
        }

        selectedOption.parentElement.classList.add(classToApply)

        setTimeout (() => {
          selectedOption.parentElement.classList.remove(classToApply)
          newQuestion()
        }, 1000)

  })
    })

  })
};

function newQuestion () {

};

function checkAnswer () {

};

function incrementScore()= num =>  {

};

function incrementIncorrectScore () {

};

function calculateFinalResults () {

};

function retry () {

};

/* questions for the quiz */

let questions = [

  {
    question: 'What was the name of the French football player who was infamously sent off in the 2006 World Cup Final?',

       option1: 'Zinedine Zidane',
       option2: 'William Gallas',
       option3: 'Frank Ribery', 
       option4: 'Thierry Henry',
       answer: 1,
    
  },
  

  {
    question: 'The only city to have hosted both the Summer and Winter Olympic Games is which of the following?',
    
      option1: 'Helsinki',
      option2: 'Moscow',
      option3: 'Beijing', 
      option4: 'Montreal',
      answer: 3,
  },
  {
    question: 'Who was the first team to win the FA Cup?',
    
      option1: 'Maidenhead',
      option2: 'Wanderers',
      option3: 'Queens Park',
      option4: 'Crystal Palace',
      answer: 2,
  },
  {
    question: 'Which has won the most Olympic medals in total?',
   
      option1: 'United States', 
      option2: 'United Kingdom', 
      option3: 'France', 
      option4: 'China',
      answer: 1,
  },
  {
    question: 'Who won the very first UFC tournament (now known as UFC 1)?',
    
      option1: 'Gerard Gordeau',
      option2: 'Ken Shamrock',
      option3: 'Art Jimmerson',
      option4: 'Royce Gracie',
      answer: 4,
    
  },
  {
    question: 'Who did Michael Schumacher win his first F1 World Drivers Championship?',
  
      option1: 'Benetton',
      option2: 'Jordan', 
      option3: 'Minardi',
      option4: 'Ferrari',
      answer: 1,
  },
  {
    question: 'Which tennis player has spent the longest amount of time at rank number 1 in mens?',
    
    option1: 'Novak Djokovic',
    option2: 'Roger Federer',
    option3: 'Rafael Nadal', 
    option4: 'Pete Sampras',
    answer: 2,
    
  },
  {
    question: '"Who has won the most GAA All-Ireland Football Championships in a row?',
    
    option1: 'Dublin',
    option2: 'Cork',
    option3: 'Fermanagh',
    option4: 'Kerry',
    answer:1 ,
  },

  {
    question: 'Which is the smallest area by population represented by a football team to win the European Cup/Champions League?',
    
    option1: 'Nottingham',
    option2: 'Porto', 
    option3: 'Belgrade',
    option4: 'Salzburg',
    answer: 2,
    
  },
  {
    question: 'Who is the only football player to have scored a goal in the Premier League, Championship, League One, League Two, FA Cup, League Cup, Football League Trophy, FA Trophy, UEFA Champions League, UEFA Europa League, Scottish Cup, Scottish League Cup and the Scottish Premier League?',
  
      option1: 'Tony Watt', 
      option2: 'Steve Davis',
      option3: 'Billy Sharp',
      option4: 'Gary Hooper',
      answer: 4,
  },
  

  {
    question: 'Who has won the most Golden Boot awards in the Italian top football division, Serie A?',
  
      option1: 'Gunnar Nordahl', 
      option2: 'Michel Platini', 
      option3: 'Ciro Immobile', 
      option4: 'Zlatan Ibrahimović',
      answer: 1,
  },
  {
    question: 'In American Football, who is the Superbowl trophy named after?',
    
      option1: 'George Allen', 
      option2: 'Marv Levy', 
      option3: 'Vince Lombardi', 
      option4: 'Paul Brown',
      answer: 3,
  },

  {
    question: 'The famous boxing match between Muhammad Ali and George Foreman known as "The Rumble in the Jungle" took place where?',
    
      option1: 'Windhoek, Namibia',
      option2: 'Lagos, Nigeria',
      option3: 'Libreville, Gabon', 
      option4: 'Kinshasa, Zaire',
      answer: 4,
  },

  {
    question: 'Who was the first footballer to be bought for over £10,000,000?',
    
      option1: 'Jean-Pierre Papin',
      option2: 'Alan Shearer', 
      option3: 'Ronaldo', 
      option4: 'Gianluca Vialli',
      answer: 1,
  },


]