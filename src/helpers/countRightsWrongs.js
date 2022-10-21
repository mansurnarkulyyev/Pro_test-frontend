const countRightsWrongs = (standard, result) => {
  const rights = result.reduce((acc, el) => {
    const { question, answer } = el;
    const requiredQuestion = standard.find((el) => el.question === question);
    return requiredQuestion.rightAnswer === answer ? acc + 1 : acc;
  }, 0);
  const wrongs = standard.length - rights;
  return [rights, wrongs];
};

export default countRightsWrongs;
