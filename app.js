const user = prompt('Введите ваше имя');
if(user!=null){
  localStorage.setItem('userID', user);
}

const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Что такое JavaScript?',
    answers: [
      { text: 'Язык программирования', correct: true },
      { text: 'Язык разметки', correct: false }
    ]
  },
  {
    question: 'В каком месте HTML документа может располагаться JavaScript код?',
    answers: [
      { text: 'В секции <body>', correct: false },
      { text: 'В секции <head>', correct: false },
      { text: 'В секции <head> и в секции <body>', correct: true },
      { text: 'В блоке <div>', correct: false }
    ]
  },
  {
    question: 'Выберите комментарий использующийся в JavaScript:',
    answers: [
      { text: '--/ Я являюсь комментарием', correct: false },
      { text: '<? Я являюсь комментарием ?>', correct: false },
      { text: '<!-- Я являюсь комментарием -->', correct: false },
      { text: '//Я являюсь комментарием', correct: true }
    ]
  },
  {
    question: 'Чувствителен ли JavaScript к регистру символов?',
    answers: [
      { text: 'не всегда', correct: false },
      { text: 'что такое регистр символов', correct: false },
      { text: 'нет', correct: false },
      { text: 'да', correct: true }
    ]
  },
  {
    question: 'Какое событие позволяет выполнять код после щелчка мыши?',
    answers: [
      { text: 'mouseclick', correct: false },
      { text: 'onclick', correct: true },
      { text: 'onmouseclick', correct: false },
      { text: 'mouseout', correct: false }
    ]
  },
  {
    question: 'Какой BOM объект содержит информацию о браузере пользователя?',
    answers: [
      { text: 'map', correct: false },
      { text: 'navigator', correct: true },
      { text: 'browser', correct: false },
      { text: 'history', correct: false }
    ]
  },
  {
    question: 'Выберите метод JavaScript позволяющий выполнять произвольный код через заданные промежутки времени:',
    answers: [
      { text: 'setTimeOut()', correct: false },
      { text: 'timer()', correct: false },
      { text: 'setInterval()', correct: true },
      { text: 'callCode()', correct: false }
    ]
  },
  {
    question: 'Какое выражение позволяет проверять участки кода на наличие ошибок?',
    answers: [
      { text: 'error..catch', correct: false },
      { text: 'throw', correct: false },
      { text: 'error..try', correct: false },
      { text: 'try..catch', correct: true }
    ]
  },
  {
    question: 'Выберите метод позволяющий округлить число до ближайшего целого в меньшую сторону:',
    answers: [
      { text: 'round', correct: false },
      { text: 'random', correct: false },
      { text: 'floor', correct: true },
      { text: 'ceil', correct: false }
    ]
  }
  
]