import React, { useState, useRef, useEffect } from 'react';
import { generateAIResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

export const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi! I'm Apratim's AI assistant. Ask me anything about his experience!", timestamp: new Date() }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: inputValue, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const responseText = await generateAIResponse(inputValue);
      const modelMsg: ChatMessage = { role: 'model', text: responseText, timestamp: new Date() };
      setMessages(prev => [...prev, modelMsg]);
    } catch (error) {
       setMessages(prev => [...prev, { role: 'model', text: "An error occurred. Please try again.", timestamp: new Date() }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-[350px] md:w-[400px] h-[500px] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-white/10 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300 backdrop-blur-md">
          {/* Header */}
          <div className="bg-brand-black dark:bg-black p-4 flex justify-between items-center text-white border-b border-gray-800 dark:border-white/10">
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-robot text-blue-400 dark:text-nyc-cyan text-xl"></i>
              <div>
                <h3 className="font-semibold text-sm">Ask AI about Apratim</h3>
                <p className="text-xs text-gray-400">Powered by Gemini</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
              <i className="fa-solid fa-xmark text-lg"></i>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-transparent">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl p-3 text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 dark:bg-nyc-cyan dark:text-black text-white rounded-tr-none' 
                    : 'bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-gray-200 rounded-tl-none shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 rounded-2xl rounded-tl-none p-3 shadow-sm">
                  <i className="fa-solid fa-spinner fa-spin text-gray-400 dark:text-gray-300"></i>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white dark:bg-black/40 border-t border-gray-100 dark:border-white/10">
            <div className="relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about Apratim..."
                className="w-full pl-4 pr-12 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-nyc-cyan/20 focus:border-blue-500 dark:focus:border-nyc-cyan transition-all text-sm text-gray-900 dark:text-white placeholder-gray-500"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !inputValue.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-blue-600 dark:bg-nyc-cyan text-white dark:text-black rounded-lg hover:bg-blue-700 dark:hover:bg-nyc-cyan/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group relative rounded-full shadow-lg transition-transform duration-300 hover:scale-105
          ${isOpen ? 'bg-gray-800' : 'bg-black hover:bg-blue-600'}
          dark:bg-gradient-to-r dark:from-nyc-cyan dark:to-nyc-purple dark:p-[2px] dark:hover:bg-gradient-to-r
        `}
      >
        <div className={`flex items-center gap-2 px-5 py-3 rounded-full
          ${/* Inherit background in light mode (transparent), force black in dark mode to show gradient border */ ''}
          dark:bg-black text-white w-full h-full
        `}>
          {isOpen ? <i className="fa-solid fa-xmark text-xl"></i> : <i className="fa-regular fa-comment-dots text-xl dark:text-nyc-cyan"></i>}
          <span className="font-medium text-sm dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-nyc-cyan dark:to-nyc-purple">
            {isOpen ? 'Close Chat' : 'Ask AI'}
          </span>
        </div>
      </button>
    </div>
  );
};
