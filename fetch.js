export default async function fetchQuestions(server) {
  const req = await fetch(`${server}/questions`)
  const res = await req.json()
  return res
}

export async function postQuestion(server, question) {
  const req = await fetch(`${server}/question`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ question: question }),
  })
}

export async function postVote() {}
