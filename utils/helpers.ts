export function getCorrectAnswers(answers: Object): Array<number> {
  let corrects = Object.values(answers)
    .map((answer: string, index: number) => {
      return {
        index: index,
        answer: answer === "true",
      };
    })
    .filter((answer) => answer.answer)
    .map((answer) => answer.index);
  console.log(
    "CHECKING ANSWERS",
    Object.values(answers).filter((value) => value === "true"),
    corrects
  );
  return corrects;
}
