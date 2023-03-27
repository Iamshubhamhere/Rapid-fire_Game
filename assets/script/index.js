'use strict';

const grid = document.querySelector('.grid');
const timer = document.querySelector('#timer');
const current = document.querySelector('.current');
const textInput = document.querySelector('.text-input');
const StartBtn = document.querySelector('.start');
const resetBtn = document.querySelector('.reset');
const hardMode = document.querySelector('.hardMode');
const noOfHits = document.querySelector('#hits');
const highScore = document.querySelector('#score');
const message = document.querySelector('h2');

const BgSound = new Audio('./assets/audio/backgroundSound.mp3');
BgSound.type = 'audio/mp3';
BgSound.volume = 0.4;
const hardModeSound = new Audio('./assets/audio/HardModeSound.mp3');
hardModeSound.type = 'audio/mp3';
hardModeSound.volume = 0.4;
const hitSound = new Audio('./assets/audio/hitSound.mp3');
hitSound.type = 'audio/mp3';
hitSound.volume = 0.3;
const wrongSound = new Audio('./assets/audio/wrongAnswer.mp3');
wrongSound.type = 'audio/mp3';
wrongSound.volume = 0.3;

const words = ['dinosaur', 'love', 'pineapple', 'calendar', 'robot', 'building', 
'weather', 'bottle', 'history', 'dream', 'character', 'money', 'absolute',
'discipline', 'machine', 'accurate', 'connection', 'rainbow', 'bicycle',
'eclipse', 'calculator', 'trouble', 'watermelon', 'developer', 'philosophy',
'database', 'periodic', 'capitalism', 'abominable', 'component', 'future',
'pasta', 'microwave', 'jungle', 'wallet', 'canada', 'coffee', 'beauty', 'agency',
'chocolate', 'eleven', 'technology', 'alphabet', 'knowledge', 'magician',
'professor', 'triangle', 'earthquake', 'baseball', 'beyond', 'evolution',
'banana', 'perfumer', 'computer', 'management', 'discovery', 'ambition', 'music',
'eagle', 'crown', 'chess', 'laptop', 'bedroom', 'delivery', 'enemy', 'button',
'superman', 'library', 'unboxing', 'bookstore', 'language', 'homework',
'fantastic', 'economy', 'interview', 'awesome', 'challenge', 'science', 'mystery',
'famous', 'league', 'memory', 'leather', 'planet', 'software', 'update', 'yellow',
'keyboard', 'window', 'population'];


class Score {
    #date;
    #hits;
    #percentage;
    constructor(date, hits, percentage) {
        this.#date = date;
        this.#hits = hits;
        this.#percentage = percentage;
    }

    get date() {return this.#date}
    get hits() {return this.#hits}
    get percentage() {return this.#percentage}

    getPercentage() {
        this.#percentage = (this.#hits * 100) / 90;
       
      };
      
      getScore() {
        return `${this.#date} | Hits: ${this.#hits} | Percentage: ${this.#percentage.toFixed(2)}%`;
      };
}


let hits = 0;
let perc;
let date = new Date().toDateString().slice(3, 10);
const player = new Score(date, hits, perc);
let time = 99;
let points = 0 ;
let gameRunning = false;
//Update time

function updateTime() {
  if (!gameRunning) {
    return;
  }
  timer.innerHTML = `${time}s`;
    if(time > 0){
    // decrement
    time--;
    
  } 

  else if (time === 0) {
    BgSound.pause();
  //console.log(time);
  }
}


let randomWord = ' ';


function getRandomWord() {
    let wordSelected = words[Math.floor(Math.random() * words.length)];
   
    //Delete word selected of the array
    const indexToRemove = words.indexOf(wordSelected);
      if (indexToRemove !== -1) {
      words.splice(indexToRemove, 1);
    }
    return wordSelected;
  }
  
  //Display random word in the screen
  function displayRandomWord() {
    randomWord = getRandomWord();
    current.innerHTML = randomWord;
  }

  

  StartBtn.addEventListener('click', () => {
   
    gameRunning = true;
    setInterval(updateTime, 1000);
    setTimeout(() => {
      setInterval();
    }, 99000);
    textInput.style.visibility = 'visible';
    BgSound.play();
    BgSound.loop = true;
    textInput.focus();
    displayRandomWord() ;
    current.style.visibility = 'visible';
    textInput.style.color = '#1a1d28';
    hardMode.disabled = true;
    grid.style.background = 'transparent';
    
    
  });

  hardMode.addEventListener('click', () =>{
    gameRunning = true;
    setInterval(updateTime, 1000);
    setTimeout(() => {
      setInterval();
    }, 99000);
    textInput.style.visibility = 'visible';
    hardModeSound.play();
    hardModeSound.loop = true;
    textInput.focus();
    displayRandomWord() ;
    current.style.visibility = 'visible';
    current.style.fontFamily = 'Rubik Vinyl';
    grid.style.background = 'url("./assets/images/background.png") no-repeat center center/cover';
    StartBtn.disabled = true;
  })

  
  textInput.addEventListener('input', e => {
    const insertedText = e.target.value;
  
    if (insertedText === current.innerText) {
      hitSound.play();
      message.innerHTML = 'Correct!!';
      points+=5;
      hits++;
      noOfHits.innerHTML = `${hits}`;
      highScore.innerHTML = `${points}`;
      if (points === 90) {
        endGame();
      }
      displayRandomWord();
      setTimeout(() => {
        message.innerHTML = ' ';
      }, 1000);
    
    } else {
    
    return false;
    }
    
    e.target.value = '';
    updateTime();
  });
  
resetBtn.addEventListener('click', () => {
  // Reset game state
  hits = 0;
  perc = 0;
  points = 0;
  time = 99;
  
  words.splice(0, words.length);
  words.push(
    'dinosaur', 'love', 'pineapple', 'calendar', 'robot', 'building', 
    'weather', 'bottle', 'history', 'dream', 'character', 'money', 'absolute',
    'discipline', 'machine', 'accurate', 'connection', 'rainbow', 'bicycle',
    'eclipse', 'calculator', 'trouble', 'watermelon', 'developer', 'philosophy',
    'database', 'periodic', 'capitalism', 'abominable', 'component', 'future',
    'pasta', 'microwave', 'jungle', 'wallet', 'canada', 'coffee', 'beauty', 'agency',
    'chocolate', 'eleven', 'technology', 'alphabet', 'knowledge', 'magician',
    'professor', 'triangle', 'earthquake', 'baseball', 'beyond', 'evolution',
    'banana', 'perfumer', 'computer', 'management', 'discovery', 'ambition', 'music',
    'eagle', 'crown', 'chess', 'laptop', 'bedroom', 'delivery', 'enemy', 'button',
    'superman', 'library', 'unboxing', 'bookstore', 'language', 'homework',
    'fantastic', 'economy', 'interview', 'awesome', 'challenge', 'science', 'mystery',
    'famous', 'league', 'memory', 'leather', 'planet', 'software', 'update', 'yellow',
    'keyboard', 'window', 'population'
  );
  StartBtn.disabled = false;
  current.style.fontFamily = 'Nunito';
  hardMode.disabled = false;
  gameRunning = false;
  grid.style.background = 'none';
  BgSound.pause();
  BgSound.currentTime = 0;
  hardModeSound.pause();
  hardModeSound.currentTime = 0;
  noOfHits.innerHTML = `${hits}`;
  highScore.innerHTML = `${points}`;
  timer.innerHTML = `0`;
  textInput.value = '';
  textInput.style.visibility = 'hidden';
  current.value = '';
  current.style.visibility = 'hidden';
  message.innerHTML = ' ';
});