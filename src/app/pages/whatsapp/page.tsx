'use client';

import { useEffect, useState } from 'react';
import { FaCar, FaPaperPlane, FaQuestionCircle, FaTimes, FaWhatsapp } from 'react-icons/fa';
import { MdSupportAgent } from 'react-icons/md';

const WhatsAppChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<Array<{text: string, isUser: boolean, timestamp: Date}>>([
    {
      text: "Hello! I'm your A2Z Autobody Parts assistant. How can I help you with BMW, Audi, Mercedes, or Porsche parts today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);

  const quickReplies = [
    "Need BMW bumper parts",
    "Audi headlight inquiry",
    "Mercedes body panel quote",
    "Porsche part availability",
    "VIN matching help",
    "Shipping information",
    "Talk to human agent"
  ];

  const phoneNumber = "+27781957725"; // Your WhatsApp number
  const defaultMessage = "Hi, I need help with auto body parts from your website.";

  const handleSendMessage = () => {
    if (!message.trim()) return;

    // Add user message to chat
    const userMessage = { text: message, isUser: true, timestamp: new Date() };
    setChatHistory(prev => [...prev, userMessage]);
    
    // Clear input
    setMessage('');
    
    // Simulate bot response after delay
    setTimeout(() => {
      const responses = [
        "I can help you with that. Could you provide your vehicle's VIN number for accurate part matching?",
        "We have that part in stock! Would you like me to check pricing and availability?",
        "Our specialists can assist with that. Would you like me to connect you with a parts expert?",
        "We offer nationwide delivery across South Africa. Where are you located?",
        "That part is compatible with multiple models. Could you specify your vehicle's year?",
        "I'll check our inventory for you. One moment please..."
      ];
      
      const botResponse = {
        text: responses[Math.floor(Math.random() * responses.length)],
        isUser: false,
        timestamp: new Date()
      };
      setChatHistory(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleQuickReply = (reply: string) => {
    setMessage(reply);
    setTimeout(() => {
      handleSendMessage();
    }, 100);
  };

  const handleOpenWhatsApp = () => {
    const encodedMessage = encodeURIComponent(defaultMessage);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  // Close chat when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest('.whatsapp-chat-container') && !target.closest('.whatsapp-button')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <>
      {/* WhatsApp Chat Container */}
      <div className="fixed bottom-6 right-6 z-50 whatsapp-chat-container">
        {/* Chat Window */}
        {isOpen && (
          <div className="absolute bottom-20 right-0 w-80 md:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 animate-slide-up">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="relative">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      <FaWhatsapp className="text-green-600 text-2xl" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-bold text-lg">A2Z Auto Parts Support</h3>
                    <div className="flex items-center text-green-100 text-sm">
                      <div className="w-2 h-2 bg-green-300 rounded-full mr-1 animate-pulse"></div>
                      Online • Usually replies instantly
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <FaTimes />
                </button>
              </div>
            </div>

            {/* Chat Body */}
            <div className="h-96 bg-gray-50 p-4 overflow-y-auto">
              <div className="space-y-4">
                {chatHistory.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2 ${msg.isUser
                          ? 'bg-green-100 text-gray-800 rounded-br-none'
                          : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm'
                        }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                      <p className="text-xs text-gray-500 mt-1 text-right">
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Replies */}
              <div className="mt-6">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <FaQuestionCircle className="mr-2" />
                  <span>Quick questions:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickReply(reply)}
                      className="text-xs bg-white border border-gray-300 hover:border-green-500 hover:text-green-700 rounded-full px-3 py-1.5 transition-all duration-200"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Chat Input */}
            <div className="border-t border-gray-200 p-4 bg-white">
              <div className="flex items-center">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message about auto parts..."
                  className="flex-1 border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!message.trim()}
                  className={`ml-3 p-3 rounded-full ${message.trim()
                      ? 'bg-green-600 hover:bg-green-700'
                      : 'bg-gray-300 cursor-not-allowed'
                    } text-white transition-colors`}
                >
                  <FaPaperPlane />
                </button>
              </div>
              <div className="mt-3 text-center">
                <button
                  onClick={handleOpenWhatsApp}
                  className="text-sm text-green-600 hover:text-green-700 font-medium flex items-center justify-center mx-auto"
                >
                  <MdSupportAgent className="mr-2" />
                  Continue in WhatsApp for faster response
                </button>
              </div>
            </div>
          </div>
        )}

        {/* WhatsApp Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="whatsapp-button bg-gradient-to-r from-green-600 to-green-700 text-white p-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center relative group"
        >
          {isOpen ? (
            <FaTimes className="text-2xl" />
          ) : (
            <>
              <FaWhatsapp className="text-3xl" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-ping"></span>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                1
              </span>
            </>
          )}
          
          {/* Tooltip */}
          {!isOpen && (
            <div className="absolute -top-12 right-0 bg-gray-900 text-white text-sm rounded-lg px-3 py-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
              <div className="flex items-center">
                <FaCar className="mr-2" />
                Need help with parts?
              </div>
              <div className="absolute -bottom-1 right-4 w-2 h-2 bg-gray-900 transform rotate-45"></div>
            </div>
          )}
        </button>
      </div>

      {/* Add custom animations */}
      <style jsx global>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
        
        /* Scrollbar styling for chat */
        .overflow-y-auto::-webkit-scrollbar {
          width: 6px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 3px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 3px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8;
        }
      `}</style>
    </>
  );
};

export default WhatsAppChatBot;