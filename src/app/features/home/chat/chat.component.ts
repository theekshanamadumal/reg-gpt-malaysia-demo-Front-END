import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";  // Import environment configuration
import { ChatModel } from 'src/app/core/models/chat-model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  @Input() chats: Array<ChatModel>;
  @Input() selectedChatIndex: number;
  @Output() onQuestionSelect: EventEmitter<number> = new EventEmitter();

  constructor(private http: HttpClient,private toastr: ToastrService) { }

  onSelect(index: number): void {
    this.onQuestionSelect.emit(index);
  }

  thumbsUp(index: number) {
    const question = this.chats[index].questionModel.user_input;
    const botResponse = this.chats[index].answerModel.content;
    const userFeedback = this.chats[index].userTypedMessage ? this.chats[index].userTypedMessage : ''; // Get user's typed message
    const feedback = 'Good'; // Set feedback to 'Good'
    this.sendFeedbackToBackend(question, botResponse, userFeedback, feedback);
    this.chats[index].feedbackSubmitted = true; // Mark feedback as submitted
    this.chats[index].userTypedMessage = ''; // Clear user's typed message
    this.toastr.success('Thank you for your feedback!', 'Feedback Submitted');
  }
  
  thumbsDown(index: number) {
    const question = this.chats[index].questionModel.user_input;
    const botResponse = this.chats[index].answerModel.content;
    const userFeedback = this.chats[index].userTypedMessage ? this.chats[index].userTypedMessage : ''; // Get user's typed message
    const feedback = 'Bad'; // Set feedback to 'Bad
    this.sendFeedbackToBackend(question, botResponse, userFeedback, feedback);
    this.chats[index].feedbackSubmitted = true; // Mark feedback as submitted
    this.chats[index].userTypedMessage = ''; // Clear user's typed message
    this.toastr.success('Thank you for your feedback!', 'Feedback Submitted');
  }
  
  sendFeedbackToBackend(question: string, botResponse: string, userFeedback: string, feedback: string) {
    const feedbackData = {
      question: question,
      botResponse: botResponse,
      userFeedback: userFeedback,
      feedback: feedback
    };
  
    // Use the backend API URL from environment configuration
    const apiUrl = `${environment.identityServerURL}/feedback`;
  
    this.http.post(apiUrl, feedbackData).subscribe(
      (response) => {
        console.log('Feedback sent successfully:', response);
      },
      (error) => {
        console.error('Error sending feedback:', error);
      }
    );
  }
  
  
}
