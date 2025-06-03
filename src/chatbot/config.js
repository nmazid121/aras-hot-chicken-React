import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'Ara\'s Assistant';

const config = {
  initialMessages: [
    createChatBotMessage(`Hi! I'm ${botName}! 😺 How can I help you today?`),
  ],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#FF6B6B',
    },
    chatButton: {
      backgroundColor: '#FF6B6B',
    },
  },
  state: {
    menuItems: [
      'Hot Chicken Sandwich',
      'Tenders',
      'Wings',
      'Loaded Fries',
      'Mac & Cheese',
      'Iftar Box',
    ],
    spiceLevels: [
      'Country (No Heat)',
      'Mild',
      'Medium',
      'Hot',
      'Extra Hot',
      'Ara\'s Revenge',
    ],
    hours: {
      'Monday': 'Closed',
      'Tuesday': '12:00 PM – 8:00 PM',
      'Wednesday': '12:00 PM – 8:00 PM',
      'Thursday': '12:00 PM – 8:00 PM',
      'Friday': '12:00 PM – 10:00 PM',
      'Saturday': '12:00 PM – 9:00 PM',
      'Sunday': '12:00 PM – 8:00 PM',
    },
    location: '323 Raritan Avenue, Highland Park, NJ 08904',
    orderOptions: [
      { name: 'Pickup', url: 'https://aras-hot-chicken.square.site/' },
      { name: 'GrubHub', url: 'https://www.grubhub.com/restaurant/aras-hot-chicken-323-raritan-ave-highland-park/5610600' },
      { name: 'UberEats', url: 'https://www.ubereats.com/store/aras-hot-chicken/49TfWelISeq7DOtELwOBBA' },
      { name: 'DoorDash', url: 'https://www.doordash.com/store/ara\'s-hot-chicken-highland-park-25116380/' },
    ],
  },
};

export default config; 