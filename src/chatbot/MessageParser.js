class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    // Send all messages to the AI handler
    return this.actionProvider.handleMessage(message);
  }
}

export default MessageParser; 