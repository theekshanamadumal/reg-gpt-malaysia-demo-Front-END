import { Injectable } from '@angular/core';
import { KeyValueModel } from 'src/app/core/models/key-value.model';

@Injectable({
  providedIn: 'root',
})
export class UrlConfigs {
    private urlList: KeyValueModel[];

  constructor() {
    this.UrlInit();
  }

  public UrlInit() {

    this.urlList = [
      {
        key: "AiModels",
        value: "Chat/ai-models"
      },
      {
        key: 'ChatHistoryByUser',
        value: 'History/get-chat-history?UserId=${id}'
      },
      {
        key: 'ChatHistoryByDate',
        value: 'History/get-chat-history-by-date?UserId=${id}&createdOn=${date}'
      },
      {
        key: 'GenerateAnswer',
        value: 'chat'
      },
      {
        key: 'Login',
        value: 'Auth/login'
      },
      {
        key: 'Logout',
        value: 'Auth/logout'
      }
    ];
  }

  public setValue(list: KeyValueModel[]) {
    this.urlList = list;
  }

  public getValueByKey(key: string) {
    return this.urlList.filter(item => item.key === key)[0].value;
  }

  public getLength() {
    return this.urlList.length;
  }
}
