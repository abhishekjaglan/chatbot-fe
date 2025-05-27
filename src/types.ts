export interface MessageProps {
    text: string;
    isUser: boolean;
}

export interface InputAreaProps {
    onSendMessage: (message: string) => void;
}

export interface MessageType {
    text: string;
    isUser: boolean;
}
