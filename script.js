const welcomeScreen = document.getElementById('welcome-screen');
const startButton = document.getElementById('start-button');
const questContainer = document.getElementById('quest-container');
const questContent = document.getElementById('quest-content');
const message = document.getElementById('message');
const answerInput = document.getElementById('answer');
const submitButton = document.getElementById('submit');

let currentStep = 0;

const steps = [
  {
    question: "Когда мы начали нашел общение?",
    answer: "1 июля",
    nextMessage: "Отлично!"
  },
  {
    question: "Довольно легкий вопрос, сколько мне лет?",
    answer: "15",
    nextMessage: "Сколько в рот брала? Понял 😮"
  },
  {
    question: "Честно, я не придумал последний вопрос.. Хотя, просто напиши да",
    answer: "нет",
    nextMessage: "Как ты до этого додумалась скажи мне"
  }
];

// Функция для обновления контента квеста
function updateQuest() {
  if (currentStep < steps.length) {
    message.textContent = steps[currentStep].question;
    answerInput.value = ''; // Очищаем поле ввода
  } else {
    questContent.innerHTML = '<p>Ты прошла квест! Не знаю, что хотел тут сначала написать, просто хочу тебе сказать, что очень сильно тебя люблю и скучаю, с праздником тебя! 😊</p>';
  }
}

// Обработчик нажатия кнопки "Ответить"
submitButton.addEventListener('click', () => {
  const userAnswer = answerInput.value.toLowerCase();
  if (userAnswer === steps[currentStep].answer) {
    currentStep++;
    if (currentStep < steps.length) {
      alert(steps[currentStep - 1].nextMessage);
    }
    updateQuest();
  } else {
    alert('Што ты пишешь вообще');
  }
});

// Обработчик нажатия кнопки "Начать квест"
startButton.addEventListener('click', () => {
  welcomeScreen.style.display = 'none'; // Скрываем экран приветствия
  questContainer.style.display = 'block'; // Показываем контейнер квеста
  updateQuest(); // Запускаем квест
});