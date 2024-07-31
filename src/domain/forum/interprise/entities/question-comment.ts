import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { Optional } from "@/core/types/optional";
import { Comment, CommentProps } from "./comment";

export interface QuestionPropsProps extends CommentProps {
  questionId: UniqueEntityID;
}

export class QuestionProps extends Comment<QuestionPropsProps> {
  get questionId() {
    return this.props.questionId;
  }

  static create(
    props: Optional<QuestionPropsProps, "createdAt">,
    id?: UniqueEntityID,
  ) {
    const questionProps = new QuestionProps(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    );

    return questionProps;
  }
}
