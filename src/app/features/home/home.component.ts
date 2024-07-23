import { Component, OnInit } from '@angular/core';
import { AiModelModel } from 'src/app/core/models/ai-model.model';
import { ChatModel } from 'src/app/core/models/chat-model';
import { QueryModel } from 'src/app/core/models/query.model';
import { QuestionModel } from 'src/app/core/models/question.model';
import { UserModel } from 'src/app/core/models/user.model';
import { HistoryService } from 'src/app/core/services/history.service';
import { DatePipe } from '@angular/common';
import { AppConstant } from 'src/app/shared/app-constants/app-constants';
import { ChatService } from 'src/app/core/services/chat.service';
import { AnswerModel } from 'src/app/core/models/answer.model';
import { getLoggedInUser } from 'src/app/shared/helpers/auth';
import { ToastrService } from 'ngx-toastr';
import { SourceDocumentModel } from 'src/app/core/models/source-document.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {


  chats: Array<ChatModel> = [];
  selectedChatIndex: number;
  userQuestion: string;
  isLoading: boolean = false;
  isContainerHidden: boolean = false;


  constructor(private historyService : HistoryService,
    private datePipe: DatePipe, 
    private chatService: ChatService,
    private toastr: ToastrService) { }

  ngOnInit(): void {

  }
  copyQuestion(question: string) {
    // Copy the question to the clipboard
    const textField = document.createElement('textarea');
    textField.innerText = question;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();

    // Show a toast message
    this.toastr.success('Question copied: ' + question, 'Copied');
}

  onQuestionSubmit() {
    if(this.userQuestion){
      console.log("row user question :",this.userQuestion);
      const questionModel: QuestionModel = new QuestionModel();

  
      questionModel.user_input = this.userQuestion;

      this.isLoading = true;

      this.chatService.generateAnswer(questionModel).subscribe((response) => {
        console.log(response);

        const chatModel: ChatModel = new ChatModel();
        // console.log("chatmodel :",chatModel);
        const user_input = response["user_input"];
        console.log("user input :",user_input);
        const arr= response["format_data"];
        console.log("arr :",arr);
        const Question_model= {
          user_input: user_input
      };
        chatModel.questionModel = Question_model;
        console.log("user question :",chatModel.questionModel);
        
        const Answer_Model ={
          content: response.bot_response,
          sourceDocuments: response.format_data
      }
        chatModel.answerModel = Answer_Model;
        this.chats.unshift(chatModel);
        this.selectedChatIndex = 0;
        this.isLoading = false;
        this.userQuestion = '';
        //this.getChatHistoryByUser(this.user.userId);
      }, error => {
        this.isLoading = false;
      });
      this.isContainerHidden = true;
    } 
  }

  handleQuestionSelect(index: number): void {
    this.selectedChatIndex = index;
  }
}
