import moment from 'moment';

export enum MessageType {
    TEXT = 'text'
}

export interface Chat {
    _id?: string;
    title?: string;
    picture?: string;
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
  username?: string;
  password?: string;
  profile?: Profile;
}

export const chats:Chat[] = [
    {
        _id: '0',
        title: 'Ethan Gonzalez',
        picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
        lastMessage: {
          content: 'You on your way?',
          createdAt: moment().subtract(1, 'hours').toDate()
        }
      },
      {
        _id: '1',
        title: 'Bryan Wallace',
        picture: 'https://randomuser.me/api/portraits/thumb/lego/1.jpg',
        lastMessage: {
          content: 'Hey, it\'s me',
          createdAt: moment().subtract(2, 'hours').toDate()
        }
      },
      {
        _id: '2',
        title: 'Avery Stewart',
        picture: 'https://randomuser.me/api/portraits/thumb/women/1.jpg',
        lastMessage: {
          content: 'I should buy a boat',
          createdAt: moment().subtract(1, 'days').toDate()
        }
      },
      {
        _id: '3',
        title: 'Katie Peterson',
        picture: 'https://randomuser.me/api/portraits/thumb/women/2.jpg',
        lastMessage: {
          content: 'Look at my mukluks!',
          createdAt: moment().subtract(4, 'days').toDate()
        }
      },
      {
        _id: '4',
        title: 'Ray Edwards',
        picture: 'https://randomuser.me/api/portraits/thumb/men/2.jpg',
        lastMessage: {
          content: 'This is wicked good ice cream.',
          createdAt: moment().subtract(2, 'weeks').toDate()
        }
      },
      {
        _id: '5',
        title: 'Ethan Gonzalez',
        picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
        lastMessage: {
          content: 'You on your way?',
          createdAt: moment().subtract(1, 'hours').toDate()
        }
      },
      {
        _id: '6',
        title: 'Bryan Wallace',
        picture: 'https://randomuser.me/api/portraits/thumb/lego/1.jpg',
        lastMessage: {
          content: 'Hey, it\'s me',
          createdAt: moment().subtract(2, 'hours').toDate()
        }
      },
      {
        _id: '7',
        title: 'Avery Stewart',
        picture: 'https://randomuser.me/api/portraits/thumb/women/1.jpg',
        lastMessage: {
          content: 'I should buy a boat',
          createdAt: moment().subtract(1, 'days').toDate()
        }
      },
      {
        _id: '8',
        title: 'Katie Peterson',
        picture: 'https://randomuser.me/api/portraits/thumb/women/2.jpg',
        lastMessage: {
          content: 'Look at my mukluks!',
          createdAt: moment().subtract(4, 'days').toDate()
        }
      },
      {
        _id: '9',
        title: 'Ray Edwards',
        picture: 'https://randomuser.me/api/portraits/thumb/men/2.jpg',
        lastMessage: {
          content: 'This is wicked good ice cream.',
          createdAt: moment().subtract(2, 'weeks').toDate()
        }
      }
    ];

    export const messages:Message[] = [
      {
        _id: "01",
        chatId: "0",
        content: "Salut ça va ?",
        createdAt: moment().subtract(2, 'days').toDate(),
        type: MessageType.TEXT,
      },
      {
        _id: "02",
        chatId: "0",
        content: "Salut ça va ?",
        createdAt: moment().subtract(2, 'days').toDate(),
        type: MessageType.TEXT,
      },
      {
        _id: "03",
        chatId: "0",
        content: "Salut ça va ?",
        createdAt: moment().subtract(2, 'days').toDate(),
        type: MessageType.TEXT,
      },
      {
        _id: "04",
        chatId: "0",
        content: "Salut ça va ?",
        createdAt: moment().subtract(2, 'days').toDate(),
        type: MessageType.TEXT,
      },
      {
        _id: "05",
        chatId: "0",
        content: "Salut ça va ?",
        createdAt: moment().subtract(1, 'days').toDate(),
        type: MessageType.TEXT,
      },
      {
        _id: "06",
        chatId: "0",
        content: "Salut ça va ?",
        createdAt: moment().subtract(1, 'days').toDate(),
        type: MessageType.TEXT,
      },
      {
        _id: "07",
        chatId: "0",
        content: "Salut ça va ?",
        createdAt: moment().subtract(1, 'days').toDate(),
        type: MessageType.TEXT,
      },
      {
        _id: "08",
        chatId: "0",
        content: "Salut ça va ?",
        createdAt: moment().subtract(1, 'days').toDate(),
        type: MessageType.TEXT,
      },
      {
        _id: "09",
        chatId: "0",
        content: "Salut ça va ?",
        createdAt: moment().toDate(),
        type: MessageType.TEXT,
      },
      {
        _id: "010",
        chatId: "0",
        content: "Salut ça va ?",
        createdAt: moment().toDate(),
        type: MessageType.TEXT,
      },
      {
        _id: "011",
        chatId: "0",
        content: "Salut ça va ?",
        createdAt: moment().toDate(),
        type: MessageType.TEXT,
      },
      {
        _id: "012",
        chatId: "0",
        content: "Salut ça va ?",
        createdAt: moment().toDate(),
        type: MessageType.TEXT,
      },
      {
        _id: "013",
        chatId: "0",
        content: "Salut ça va ?",
        createdAt: moment().toDate(),
        type: MessageType.TEXT,
      },
      {
        _id: "014",
        chatId: "0",
        content: "Salut ça va ?",
        createdAt: moment().toDate(),
        type: MessageType.TEXT,
      },
      {
        _id: "015",
        chatId: "0",
        content: "Salut ça va ?",
        createdAt: moment().toDate(),
        type: MessageType.TEXT,
      },
      {
        _id: "016",
        chatId: "0",
        content: "Salut ça va ?",
        createdAt: moment().toDate(),
        type: MessageType.TEXT,
      },
      {
        _id: "017",
        chatId: "0",
        content: "Salut ça va ?",
        createdAt: moment().toDate(),
        type: MessageType.TEXT,
      },
      {
        _id: "018",
        chatId: "0",
        content: "Salut ça va ?",
        createdAt: moment().toDate(),
        type: MessageType.TEXT,
      },
    ]