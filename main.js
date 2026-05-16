const server = 'http://l9r5p0b7c77dh73mp435g5j4.178.105.39.91.sslip.io'

async function fetchQuestions(server) {
  const req = await fetch(`${server}/questions`)
  const res = await req.json()
  return res
}

async function postQuestion(server, question) {
  const req = await fetch(`${server}/questions`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ question: question }),
  })
}

async function main() {
  const questions = await fetchQuestions(server)
  render(questions)
}

const questions = await fetchQuestions(server)
console.log(questions)
function render(questions) {
  const div = document.createElement('div')
  const ul = document.createElement('ul')
  questions.forEach((element) => {
    const li = document.createElement('li')
    const vote = document.createElement('button')
    li.setAttribute('id', element.id)
    li.innerText = element.question
    vote.innerText = element.votes
    li.append(vote)
    ul.append(li)
  })
  div.append(ul)
  document.querySelector('#questionsList').append(div)
}

document.querySelector('#questionForm').addEventListener('click', () => {
  submit()
  event.preventDefault()
})

function submit() {
  const questionInput = document.querySelector('#questionInput').value
  postQuestion(server, questionInput)
}

main()
