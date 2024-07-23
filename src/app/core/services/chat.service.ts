import { Injectable } from '@angular/core';
import { RequestManagerService } from "./request-manager.service";
import { UrlConfigs } from "src/app/shared/url-configs/url-configs";
import { Observable } from "rxjs";
import { QuestionModel } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private restApiService:RequestManagerService,
    private urlConfig: UrlConfigs) { }

  getModels(): Observable<any> {
    let url = `${this.urlConfig.getValueByKey('AiModels')}`;
    return this.restApiService.get(url);
  }

  generateAnswer(questionModel): Observable<any> {
    let url = `${this.urlConfig.getValueByKey('GenerateAnswer')}`;
    console.log(url);
    return this.restApiService.post(url, questionModel);
  }
}
