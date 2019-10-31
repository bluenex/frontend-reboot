const arr1 = [1,2,3,4];
const arr2 = [2,4,5,6,7];

const createTextElement = (tag, text) => {
  const elem = document.createElement(tag);
  elem.textContent = text;
  return elem;
}

const App = document.getElementById('app');

const container = document.createElement('div');
const answerList = document.createElement('ul');
const question = createTextElement(
  'p',
  `Find the duplicated elements of [${arr1}] and [${arr2}]`,
);
const code = createTextElement(
  'code',
  `arr1.filter(x => arr2.includes(x)).length;`,
)
const answer = createTextElement(
  'li',
  `The answer is "${arr1.filter(x => arr2.includes(x)).length}" from the code below:`
)

code.classList.add('code-block');

answerList.appendChild(answer);

container.appendChild(question);
container.appendChild(answerList);
container.appendChild(code);

App.appendChild(container);