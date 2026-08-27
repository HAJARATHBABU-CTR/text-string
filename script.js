// Variables
const name = "Saritha";
const age = 21;

// Template Literal (equivalent to JSX expression `{name}` and `{age}`)
const greetingText = `Hello, my name is ${name} and I am${age} years old.`;

// Select element and set content
const greetingElement = document.getElementById('greeting');
greetingElement.textContent = greetingText;
