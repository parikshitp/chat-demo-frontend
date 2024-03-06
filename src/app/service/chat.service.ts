import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private baseUrl = 'http://localhost:9090/api/messages';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`/api/users/getUsers`);
  }

  addUser(user: any): Observable<any> {
    return this.http.post<any>(`/api/users/addUser`, user);
  }

  sendMessage(message: any): Observable<any> {
    return this.http.post(`/api/message/sendMessage`, message);
  }

  getMessages(senderName: string, receiverName: string): Observable<any[]> {
    return this.http.get<any[]>(`/api/messages/${senderName}/${receiverName}`);
  }

  markMessageAsRead(messageId: number): Observable<any> {
    return this.http.put(`/api/messages/${messageId}/read`, null);
  }
}
