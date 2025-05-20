import { PaginationParams } from "@/core/repositories/pagination-params";
import { AnswerComment } from "../../interprise/entities/answer-commen";

export interface AnswerCommentsRepository {
  findById(id: string): Promise<AnswerComment | null>;
  findManyByAnswerId(
    answerId: string,
    params: PaginationParams,
  ): Promise<AnswerComment[]>;

  create(questionComment: AnswerComment): Promise<void>;
  delete(answerComment: AnswerComment): Promise<void>;
}
