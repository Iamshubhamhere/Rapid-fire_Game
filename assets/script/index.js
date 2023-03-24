'use strict';

const grid = document.querySelector('.grid');
const timer = document.querySelector('.timer');
const current = document.querySelector('.current');
const textInput = document.querySelector('.text-input');
const StartBtn = document.querySelector('.start');
const resetBtn = document.querySelector('.reset');
const hardMode = document.querySelector('.hardMode');
const noOfHits = document.querySelector('.hits');
const highScore = document.querySelector('.score');
const message = document.querySelector('.message');

const BgSound = new Audio('./assets/audio/backgroundSound.mp3');
BgSound.type = 'audio/mp3';
BgSound.volume = 0.4;
const hardModeSound = new Audio('./assets/audio/HardModeSound.mp3');
hardModeSound.type = 'audio/mp3';
hardModeSound.volume = 0.4;
const hitSound = new Audio('./assets/audio/hitSound.mp3');
hitSound.type = 'audio/mp3';
hitSound.volume = 0.3;


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
        return `${this.#date} | Hits: ${this.#hits} | ${this.#percentage.toFixed(2)}%`;
      };
}

