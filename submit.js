import postQuestion from 'fetch'
const server = 'localhost'
const port = 3000

function handleEvent(event) {
  event.preventdefault()
  submit()
}

export default function submit() {
  const questionInput = document.querySelector('#questionInput').value
  postQuestion(server, port, questionInput)
}
