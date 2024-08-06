import { AnswerComment } from "../../interprise/entities/answer-commen";

export interface AnswerCommentsRepository {
  create(questionComment: AnswerComment): Promise<void>;
}
