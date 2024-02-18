export async function getQuestions(category) {
  const url = `http://localhost:5000/api/questions/${category}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;

}

export async function sendAnswer(questionId, answer){
  const url = `http://localhost:5000/api/questions/${questionId}`;
  const res = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ answer }),
  });
  const data = await res.json();
  return data;
}
