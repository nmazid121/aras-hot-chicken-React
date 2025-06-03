import { getAIResponse } from './ai-service';

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  handleMessage = async (userMessage) => {
    // Show typing indicator
    const loadingMessage = this.createChatBotMessage("Let me think about that... 🤔");
    this.addMessageToState(loadingMessage);

    try {
      // Get AI response
      const aiResponse = await getAIResponse(userMessage);
      
      // Remove loading message and add AI response
      this.setState((prevState) => ({
        ...prevState,
        messages: prevState.messages.filter(msg => msg !== loadingMessage)
      }));
      
      const message = this.createChatBotMessage(aiResponse);
      this.addMessageToState(message);
    } catch (error) {
      // Remove loading message and show error
      this.setState((prevState) => ({
        ...prevState,
        messages: prevState.messages.filter(msg => msg !== loadingMessage)
      }));
      
      const errorMessage = this.createChatBotMessage(
        "I'm having trouble right now. Could you try asking that again? 😅"
      );
      this.addMessageToState(errorMessage);
    }
  };

  // Fallback handlers for compatibility
  handleGreeting = () => {
    this.handleMessage("Hello! What can you tell me about Ara's Hot Chicken?");
  };

  handleHours = () => {
    this.handleMessage("What are your hours of operation?");
  };

  handleMenu = () => {
    this.handleMessage("What's on your menu?");
  };

  handleSpiceLevels = () => {
    this.handleMessage("What spice levels do you offer?");
  };

  handleLocation = () => {
    this.handleMessage("Where are you located?");
  };

  handleOrdering = () => {
    this.handleMessage("How can I order from you?");
  };

  handlePricing = () => {
    this.handleMessage("What are your prices?");
  };

  handleHalalQuestion = () => {
    this.handleMessage("Is your food halal?");
  };

  handleDefault = () => {
    this.handleMessage("Can you help me with information about Ara's Hot Chicken?");
  };
}

export default ActionProvider; 