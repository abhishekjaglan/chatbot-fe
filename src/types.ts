export interface MessageProps {
    text: string;
    isUser: boolean;
}

export interface InputAreaProps {
    onSendMessage: (message: string) => void;
}