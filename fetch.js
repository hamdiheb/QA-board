const server = 'localhost'
const port = 3000

export default async function fetchQuestions(server, port) {
  const req = await fetch(`${server}:${port}\questions`)
  const res = await req.json()
  return res
}

export async function postQuestion(server, port, question) {
  const req = await fetch(`${server}:${port}\question`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ question: question }),
  })
}

export async function postVote() {}
