import { AnswerCommentsRepository } from "@/domain/forum/application/repositories/answer--comments-repository";
import { AnswerComment } from "@/domain/forum/interprise/entities/answer-commen";

export class InMemoryAnswerCommentsRepository
  implements AnswerCommentsRepository
{
  public items: AnswerComment[] = [];

  async create(answerComment: AnswerComment) {
    this.items.push(answerComment);
  }
}
