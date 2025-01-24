import React, { useState } from 'react';
import { Send, User, Bot } from 'lucide-react';

interface Message {
  text: string;
  sender: 'user' | 'support';
  timestamp: Date;
}

interface QuickResponse {
  text: string;
  responses: string[];
}

const quickResponses: { [key: string]: QuickResponse } = {
  'help': {
    text: "How can I help you today?",
    responses: [
      "I need help with my studies",
      "I want to know about subscriptions",
      "Tell me about scholarships",
      "Technical support needed"
    ]
  },
  'studies': {
    text: "Which subject would you like help with?",
    responses: [
      "Mathematics",
      "Physics",
      "Chemistry",
      "Biology"
    ]
  },
  'subscriptions': {
    text: "Here's what you need to know about subscriptions:",
    responses: [
      "Tell me about pricing",
      "What features are included?",
      "How do I upgrade?",
      "Cancel subscription"
    ]
  },
  'scholarships': {
    text: "Let me help you with scholarships:",
    responses: [
      "Am I eligible?",
      "Application process",
      "Scholarship types",
      "Application deadline"
    ]
  }
};

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [currentResponses, setCurrentResponses] = useState<string[]>([]);

  const generateResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    
    // Check for greetings
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      setCurrentResponses(quickResponses['help'].responses);
      return quickResponses['help'].text;
    }
    
    // Check for subject help
    if (lowerMessage.includes('study') || lowerMessage.includes('learn')) {
      setCurrentResponses(quickResponses['studies'].responses);
      return quickResponses['studies'].text;
    }
    
    // Check for subscription queries
    if (lowerMessage.includes('subscription') || lowerMessage.includes('price')) {
      setCurrentResponses(quickResponses['subscriptions'].responses);
      return quickResponses['subscriptions'].text;
    }
    
    // Check for scholarship queries
    if (lowerMessage.includes('scholarship')) {
      setCurrentResponses(quickResponses['scholarships'].responses);
      return quickResponses['scholarships'].text;
    }

    // Default response
    setCurrentResponses(quickResponses['help'].responses);
    return "I'm here to help! What would you like to know about?";
  };

  const sendMessage = (text: string, isQuickResponse: boolean = false) => {
    const userMessage: Message = {
      text: isQuickResponse ? text : newMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    const botResponse = generateResponse(text);
    const supportMessage: Message = {
      text: botResponse,
      sender: 'support',
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage, supportMessage]);
    setNewMessage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    sendMessage(newMessage);
  };

  const handleQuickResponse = (response: string) => {
    sendMessage(response, true);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <button
          onClick={() => {
            setIsOpen(true);
            if (messages.length === 0) {
              setMessages([{
                text: "Hello! How can I help you today?",
                sender: 'support',
                timestamp: new Date()
              }]);
              setCurrentResponses(quickResponses['help'].responses);
            }
          }}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all"
        >
          <User className="w-6 h-6" />
        </button>
      ) : (
        <div className="bg-white rounded-lg shadow-xl w-96 h-[32rem] flex flex-col">
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot className="w-6 h-6" />
              <h3 className="font-semibold">EduPlay Assistant</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
              ×
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {currentResponses.length > 0 && (
            <div className="p-4 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-2">
                {currentResponses.map((response, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickResponse(response)}
                    className="text-sm p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-left"
                  >
                    {response}
                  </button>
                ))}
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-all"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}