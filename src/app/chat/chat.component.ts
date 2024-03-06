import { Component, OnDestroy } from '@angular/core';
import { WebSocketService } from '../service/web-socket.service';
import { OnInit } from '@angular/core';
import { ChatMessageDto } from '../model/chatMessageDto';
import { NgForm } from '@angular/forms';
import { UsernameService } from './../service/username.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  user: string = ''; 
  username: any;
  sentMessages: ChatMessageDto[] = [];
  receivedMessages: ChatMessageDto[] = [];
  sentTimestamp: Date | undefined;

  constructor(public webSocketService: WebSocketService, private usernameService:UsernameService) {
    this.username = usernameService.getUsername();
   }

   
  ngOnInit(): void {
    this.webSocketService.openWebSocket();
  }

  ngOnDestroy(): void {
    this.webSocketService.closeWebSocket();
  }

  sendMessage(sendForm: NgForm): void {

    if (sendForm.value.message.trim() === '') {
      alert('Please type a message.'); 
      return; 
    }

    this.sentTimestamp = new Date();
    const chatMessageDto = new ChatMessageDto(this.username, sendForm.value.message, this.sentTimestamp);
    this.webSocketService.sendMessage(chatMessageDto);
    this.sentMessages.push(chatMessageDto);
    sendForm.resetForm(); 
  }
}