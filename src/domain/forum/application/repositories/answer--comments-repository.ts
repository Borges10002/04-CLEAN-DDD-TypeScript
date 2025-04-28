import { AnswerComment } from "../../interprise/entities/answer-commen";

export interface AnswerCommentsRepository {
  findById(id: string): Promise<AnswerComment | null>;
  create(questionComment: AnswerComment): Promise<void>;
  delete(answerComment: AnswerComment): Promise<void>;
}
