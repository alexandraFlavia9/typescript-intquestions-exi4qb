// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

function reverseStr(str: string) {
  return str.split('').reverse().join('');
}

console.log(reverseStr('Hello w!'));