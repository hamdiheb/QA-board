import postQuestion from './fetch'

document.querySelector('#questionForm').addEventListener('click', () => {
  submit()
  event.preventDefault()
})

function submit() {
  const questionInput = document.querySelector('#questionInput').value
  postQuestion(server, questionInput)
}
