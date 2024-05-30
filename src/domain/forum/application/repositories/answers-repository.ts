import { Answer } from "../forum/interprise/entities/answer";

export interface AnswersRepository {
  create(answer: Answer): Promise<void>;
}
