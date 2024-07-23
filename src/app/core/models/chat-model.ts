import { AnswerModel } from "./answer.model";
import { QuestionModel } from "./question.model";

export class ChatModel {
    questionModel: QuestionModel;
    answerModel: AnswerModel;
    feedback: string; // Add the feedback property
    feedbackSubmitted: boolean = false; // Track whether feedback has been submitted
    userTypedMessage: string; // Add the userTypedMessage property
}