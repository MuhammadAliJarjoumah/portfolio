import { Injectable } from '@angular/core';
import { Functions, httpsCallable } from '@angular/fire/functions';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

export interface EmailData {
  name: string;
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  // private apiUrl = environment.apiUrl;
  // private sendEmailFunction: any;

  // constructor(private functions: Functions, private http: HttpClient) {
  //   this.sendEmailFunction = httpsCallable(this.functions, 'sendEmail');
  // }

  // sendEmail(data: EmailData): Observable<any> {
  //   return new Observable((observer) => {
  //     this.sendEmailFunction(data)
  //       .then((result: any) => {
  //         observer.next(result.data);
  //         observer.complete();
  //       })
  //       .catch((error: any) => {
  //         observer.error(error);
  //       });
  //   });
  // }

  // getData() {
  //   return this.http.get(`${this.apiUrl}/data`);
  // }
}