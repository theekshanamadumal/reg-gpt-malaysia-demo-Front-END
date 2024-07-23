import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
@Injectable({
    providedIn: 'root'
  })
export class RequestManagerService{
    private apiUrl = environment.identityServerURL;

    constructor(private http: HttpClient) { }

    public get(endpoint: string): Observable<any> {
        const url = `${this.apiUrl}/${endpoint}`;
        return this.http.get(url);
    }

    public post(endpoint: string, data: any): Observable<any> {
        const url = `${this.apiUrl}/${endpoint}`;
        return this.http.post(url, data);
    }

    public put(endpoint: string, data: any): Observable<any> {
        const url = `${this.apiUrl}/${endpoint}`;
        return this.http.put(url, data);
    }

    public delete(endpoint: string): Observable<any> {
        const url = `${this.apiUrl}/${endpoint}`;
        return this.http.delete(url);
    }

   
}