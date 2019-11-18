import moment from 'moment';

export enum MessageType {
    TEXT = 'text'
}

export interface Chat {
    _id?: string;
    title?: string;
    picture?: string;
    participants?: string[];
    lastMessage?: Message;
}

export interface Message {
    _id?: string;
    chatId?: string;
    content?: string;
    createdAt?: Date;
    type?: MessageType;
    ownership?: string;
    senderId?: string;
}

export interface Profile {
  phone?: string;
  picture?: string;
}

export interface User {
  _id?: string;
  createdAt?: Date;
  username?: string;
  password?: string;
  services?: any;
  profile?: Profile;
}

    export const messages:Message[] = [
      {
        chatId: "cNZEJf2bfW6fbYoBM",
        content: "Salut ça va ?",
        createdAt: moment().subtract(2, 'days').toDate(),
        type: MessageType.TEXT,
      },
      {
        chatId: "pzr9LMau3pCugDzLL",
        content: "Salut ça va ?",
        createdAt: moment().subtract(2, 'days').toDate(),
        type: MessageType.TEXT,
      },
      {
        chatId: "cNZEJf2bfW6fbYoBM",
        content: "Salut ça va ?",
        createdAt: moment().subtract(2, 'days').toDate(),
        type: MessageType.TEXT,
      },
      {
        chatId: "pzr9LMau3pCugDzLL",
        content: "Salut ça va ?",
        createdAt: moment().subtract(2, 'days').toDate(),
        type: MessageType.TEXT,
      },
      {
        chatId: "cNZEJf2bfW6fbYoBM",
        content: "Salut ça va ?",
        createdAt: moment().subtract(1, 'days').toDate(),
        type: MessageType.TEXT,
      },
      {
        chatId: "pzr9LMau3pCugDzLL",
        content: "Salut ça va ?",
        createdAt: moment().subtract(1, 'days').toDate(),
        type: MessageType.TEXT,
      },
      {
        chatId: "cNZEJf2bfW6fbYoBM",
        content: "Salut ça va ?",
        createdAt: moment().subtract(1, 'days').toDate(),
        type: MessageType.TEXT,
      },
      {
        chatId: "pzr9LMau3pCugDzLL",
        content: "Salut ça va ?",
        createdAt: moment().subtract(1, 'days').toDate(),
        type: MessageType.TEXT,
      },
      {
        chatId: "cNZEJf2bfW6fbYoBM",
        content: "Salut ça va ?",
        createdAt: moment().toDate(),
        type: MessageType.TEXT,
      },
      {
        chatId: "pzr9LMau3pCugDzLL",
        content: "Salut ça va ?",
        createdAt: moment().toDate(),
        type: MessageType.TEXT,
      },
      {
        chatId: "cNZEJf2bfW6fbYoBM",
        content: "Salut ça va ?",
        createdAt: moment().toDate(),
        type: MessageType.TEXT,
      },
      {
        chatId: "pzr9LMau3pCugDzLL",
        content: "Salut ça va ?",
        createdAt: moment().toDate(),
        type: MessageType.TEXT,
      },
      {
        chatId: "cNZEJf2bfW6fbYoBM",
        content: "Salut ça va ?",
        createdAt: moment().toDate(),
        type: MessageType.TEXT,
      },
      {
        chatId: "pzr9LMau3pCugDzLL",
        content: "Salut ça va ?",
        createdAt: moment().toDate(),
        type: MessageType.TEXT,
      },
      {
        chatId: "pzr9LMau3pCugDzLL",
        content: "Salut ça va ?",
        createdAt: moment().toDate(),
        type: MessageType.TEXT,
      },
      {
        chatId: "cNZEJf2bfW6fbYoBM",
        content: "Salut ça va ?",
        createdAt: moment().toDate(),
        type: MessageType.TEXT,
      },
      {
        chatId: "pzr9LMau3pCugDzLL",
        content: "Salut ça va ?",
        createdAt: moment().toDate(),
        type: MessageType.TEXT,
      },
      {
        chatId: "cNZEJf2bfW6fbYoBM",
        content: "Salut ça va ?",
        createdAt: moment().toDate(),
        type: MessageType.TEXT,
      },
    ]