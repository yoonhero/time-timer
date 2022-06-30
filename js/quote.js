const quote_Text = document.getElementById("about__quoate");
const author_Text = document.getElementById("about__author");

//명언들 배열 안에 넣어주기(배열 하나하나는 명언과 이름이 든 객체 형태로)

function getRandomQuote() {
  let random = quotes[Math.floor(Math.random() * quotes.length)];

  quote_Text.innerText = random.quotation;

  author_Text.innerText = random.author;

  return random;
}

//랜덤 으로 문장을 뽑는 함수 만들고, 뽑아진 문장을 paintQuote() 함수를 통해 나타내기

function init() {
  getRandomQuote();
}

//최종 함수 실행!

init();