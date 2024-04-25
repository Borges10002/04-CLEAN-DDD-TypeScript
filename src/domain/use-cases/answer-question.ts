import { Answer } from "../entities/answer";
import { AnswersRepository } from "../repositories/answers-repository";

interface answerQuestionUseCaseRequest {
  instructorId: string;
  questionId: string;
  content: string;
}

export class AnswerQuestionUseCase {
  constructor(private answersRepository: AnswersRepository) {}

  async execute({
    instructorId,
    questionId,
    content,
  }: answerQuestionUseCaseRequest) {
    const answer = new Answer({ content, authorId: instructorId, questionId });

    await this.answersRepository.create(answer);

    return answer;
  }
}
