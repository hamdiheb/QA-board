import fetchQuestions from './fetch'

async function main() {
  const questions = await fetchQuestions()
  render(questions)
}

function render(questions) {
  const div = document.createElement('div')
  const ul = document.createElement('ul')
  questions.forEach((element) => {
    const li = document.createElement('li')
    const vote = document.createElement('button')
    li.setAttribute('id', element.id)
    li.innerText = element.question
    vote.innerText = element.vote
    li.append(vote)
    ul.append(li)
  })
  div.append(ul)
}

main()
