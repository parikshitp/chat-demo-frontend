export class ChatMessageDto {
    senderName: string;
    message: string;
    timestamp: Date;

    constructor(user: string, message: string, timestamp: Date){
        this.senderName = user;
        this.message = message;
        this.timestamp = timestamp;
    }
}
