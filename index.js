const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
const keyWords = {
  oo: "OO",
  api: "API",
  "jsonp?": "JSONP?",
  nan: "NaN",
  stoppropagation: "StopPropagation",
  "preventdefault?": "PreventDefault?"
}

function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    if (!keyWords[str[i]]){
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }else {
      str[i] = keyWords[str[i]];
    }
  }
  return str.join(' ');
}

const titleCased = () => {
  let newTutorials = tutorials.map(tutorial => titleCase(tutorial))

  return newTutorials;
}
