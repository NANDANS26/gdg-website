import { useState, useRef, useEffect } from 'react'
import { ChatMessage } from './ChatMessage'
import { MessageCircle, X, Send } from 'lucide-react'

interface Message {
  content: string;
  isBot: boolean;
  timestamp: Date;
}

const initialMessage: Message = {
  content: 'Hi! How can I help you learn about GDG PESCE?',
  isBot: true,
  timestamp: new Date(),
};

const suggestions = [
  'Tell me about upcoming events',
  'How can I join GDG PESCE?',
  'What technologies do you focus on?',
  'Who are the team members?',
];

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([initialMessage])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return

    // Add user message
    const userMessage: Message = {
      content: content.trim(),
      isBot: false,
      timestamp: new Date(),
    }
    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        content: getBotResponse(content),
        isBot: true,
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1000)
  }

  const getBotResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase()
    
    if (lowerMessage.includes('event') || lowerMessage.includes('workshop')) {
      return 'We have several upcoming events! Our next major event is Cloud Study Jam 2024 in February. Would you like to know more about it?'
    }
    if (lowerMessage.includes('join')) {
      return 'Great to hear you\'re interested in joining! You can become a member by signing up on our website or attending our next event. Would you like me to guide you through the process?'
    }
    if (lowerMessage.includes('technolog')) {
      return 'We focus on Google technologies including Cloud Platform, Flutter, Firebase, TensorFlow, and Web Technologies. Which area interests you the most?'
    }
    if (lowerMessage.includes('team')) {
      return 'Our team consists of passionate developers, designers, and community leaders. You can meet them all on our Team page. Would you like me to share more details about specific roles?'
    }
    return 'I\'d be happy to help you with that! Could you please be more specific about what you\'d like to know?'
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen && (
        <div className="mb-4 w-96 h-[32rem] bg-white dark:bg-gray-900 rounded-lg shadow-xl flex flex-col">
          <div className="p-4 bg-gdg-blue text-white rounded-t-lg flex justify-between items-center">
            <div>
              <h3 className="font-semibold">GDG PESCE Assistant</h3>
              <p className="text-sm text-white/80">Ask me anything!</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              {messages.map((msg, idx) => (
                <ChatMessage key={idx} {...msg} />
              ))}
              {isTyping && (
                <div className="flex items-center space-x-2 text-gray-500">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          <div className="p-4 border-t dark:border-gray-800">
            {messages.length === 1 && (
              <div className="mb-4 flex flex-wrap gap-2">
                {suggestions.map((suggestion, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(suggestion)}
                    className="px-3 py-1 text-sm bg-gdg-blue/10 text-gdg-blue rounded-full hover:bg-gdg-blue/20 transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-gdg-blue focus:border-transparent"
              />
              <button
                onClick={() => handleSendMessage(inputValue)}
                disabled={!inputValue.trim()}
                className="p-2 bg-gdg-blue text-white rounded-lg hover:bg-gdg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gdg-blue text-white p-4 rounded-full shadow-lg hover:bg-gdg-blue-600 transition-colors"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </div>
  )
}