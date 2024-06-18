import { QuestionsRepository } from "@/domain/forum/application/repositories/questions-repository";
import { Question } from "@/domain/forum/interprise/entities/question";

export class InMemoryQuestionsRepository implements QuestionsRepository {
  async findBySlug(slug: string) {
    const question = this.items.find((item) => item.slug.value === slug);

    if (!question) {
      return null;
    }

    return question;
  }

  public items: Question[] = [];

  async create(question: Question) {
    this.items.push(question);
  }
}
