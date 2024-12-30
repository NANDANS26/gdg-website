import { motion } from 'framer-motion';

interface ChatMessageProps {
  content: string;
  isBot: boolean;
  timestamp: Date;
}

export function ChatMessage({ content, isBot, timestamp }: ChatMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex ${isBot ? 'justify-start' : 'justify-end'} items-end space-x-2`}
    >
      {isBot && (
        <div className="w-8 h-8 rounded-full bg-gdg-blue/10 flex items-center justify-center flex-shrink-0">
          <span className="text-sm">🤖</span>
        </div>
      )}
      <div className={`max-w-[80%] rounded-lg px-4 py-2 ${
        isBot 
          ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-bl-none' 
          : 'bg-gdg-blue text-white rounded-br-none'
      }`}>
        <p className="text-sm">{content}</p>
        <time className="text-xs opacity-50 mt-1">
          {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </time>
      </div>
    </motion.div>
  )
}