import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // or provideIn: 'any' if needed
})
export class EmailService {
  private apiUrl = 'YOUR_BACKEND_API_ENDPOINT'; // Replace with your backend API endpoint

  constructor(private http: HttpClient) { }

  sendEmail(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data); // Send data to your backend
  }
}