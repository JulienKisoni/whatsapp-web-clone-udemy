import moment from 'moment';

export enum MessageType {
    TEXT = 'text',
    IMAGE = 'image'
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
    read?: boolean;
}

export interface Profile {
  phone?: string;
  picture?: string;
  actu?: string;
}

export interface User {
  _id?: string;
  createdAt?: Date;
  username?: string;
  password?: string;
  services?: any;
  profile?: Profile;
}

export interface Iicon {
  name: string;
  func: ()=>void;
}

export interface IOverlay {
  popup: IVisible;
  image: IVisible;
  title: string;
}

export interface IVisible {
  visible?: boolean;
  url?: string;
  otherId?: string;
}

export interface IMainState {
  visible: boolean;
  selectedChat: Chat;
  otherProfile: IVisible;
  bigOverlay: IOverlay;
}

export interface ILeftState {
  users: User[];
  LSVisible: boolean;
  showUList: boolean;
}

export interface IMsgViewState {
  modalVisible: boolean;
  selectedImage: any;
  fabVisible: boolean;
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