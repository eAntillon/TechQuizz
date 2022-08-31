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

export function getAnswers(answers: Object): Array<Object> {
  return Object.values(answers)
    .filter((i) => i !== null)
    .map((v, i) => {
      if (v) {
        return {
          answer: v,
          index: i,
        };
      }
    }) as Array<Object>;
}
