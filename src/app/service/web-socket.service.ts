import { Injectable } from '@angular/core';
import { ChatMessageDto } from '../model/chatMessageDto';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private webSocket: WebSocket | undefined;
  chatMessages: ChatMessageDto[] = [];

  constructor() { }

  public openWebSocket(): void {
    this.webSocket = new WebSocket('ws://localhost:9090/chat');

    this.webSocket.onopen = (event) => {
      console.log('WebSocket connection opened: ', event);
    };

    this.webSocket.onmessage = (event) => {
      try {
        const receivedMessage = JSON.parse(event.data);
    
        receivedMessage.timestamp = new Date().toISOString();
    
        this.chatMessages.push(receivedMessage);
      } catch (error) {
        console.error('Error parsing message: ', error);
      }
    };
    
  }

  public sendMessage(chatMessageDto: ChatMessageDto): void {
    if (this.webSocket) {
      this.webSocket.send(JSON.stringify(chatMessageDto));
      this.chatMessages.push(chatMessageDto);
    }
  }

  public closeWebSocket(): void {
    if (this.webSocket) {

      this.webSocket.onclose = (event) => {
        console.log('WebSocket connection closed: ', event);
      };
    
      this.webSocket.close();
    }
  }

}