import { expect, test } from "vitest";
import { Answer } from "../entities/answer";
import { AnswersRepository } from "../repositories/answers-repository";
import { AnswerQuestionUseCase } from "./answer-question";

const fakeAnsewersRepository: AnswersRepository = {
  create: async (answer: Answer) => {
    return;
  },
};

test("create an answer", async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnsewersRepository);

  const answer = await answerQuestion.execute({
    questionId: "1",
    instructorId: "1",
    content: "Nova resposta",
  });

  expect(answer.content).toEqual("Nova resposta");
});
