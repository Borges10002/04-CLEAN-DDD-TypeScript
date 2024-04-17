import { Answer } from "../entities/answer";

interface answerQuestionUseCaseRequest {
  instructorId: string;
  questionId: string;
  content: string;
}

export class AnswerQuestionUseCase {
  execute({ instructorId, questionId, content }: answerQuestionUseCaseRequest) {
    const answer = new Answer(content);

    return answer;
  }
}
