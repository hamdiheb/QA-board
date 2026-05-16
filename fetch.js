const server = 'localhost'
const port = 3000

export default async function fetchQuestions(server,port) {
  const req = await fetch(`${server}:${port}\questions`)
  const res = await req.json()

  if (!res) {
    console.log('error')
  } else {
    console.log(res)
  }
}

export default async function postQuestion(server,port){
    const question = document.querySelector('#question')
    const vote = document.querySelector('#vote')
    const req = await fetch(`${server}:${port}\question`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({question: question})
    });
}