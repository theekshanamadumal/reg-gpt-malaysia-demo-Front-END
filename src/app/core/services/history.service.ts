import { Injectable } from "@angular/core";
import { RequestManagerService } from "./request-manager.service";
import { UrlConfigs } from "src/app/shared/url-configs/url-configs";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class HistoryService {
  
    constructor(private restApiService:RequestManagerService,
        private urlConfig: UrlConfigs
      ) { }
  
    public getChatHistoryByUser(id: number): Observable<any> {
      let url = `${this.urlConfig.getValueByKey('ChatHistoryByUser')}`;
      url = url.replace('${id}', String(id));
      return this.restApiService.get(url);
    }
  
    public getChatHistoryByDate(id: number, createdOn: string){
      let url = `${this.urlConfig.getValueByKey('ChatHistoryByDate')}`;
      url = url.replace('${id}', String(id));
      url = url.replace('${date}', encodeURIComponent(createdOn));
      return this.restApiService.get(url);
    }
  
}
  