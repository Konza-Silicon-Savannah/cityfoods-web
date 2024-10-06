"use client"

import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, MoreVertical, ThumbsUp, X, Bold, Italic, List, Smile, Paperclip, Send 
} from 'lucide-react';

interface User {
  name: string;
  role: string;
  time: string;
}

interface MessageListProps {
  onSelectMessage: (user: string) => void;
  selectedUser: string;
}

const MessageList: React.FC<MessageListProps> = ({ onSelectMessage, selectedUser }) => {
  const users: User[] = [
    { name: 'Julian H.', role: 'Order not received', time: '2h ago' },
    { name: 'Ramona J.', role: 'Order not received', time: '12h ago' },
    { name: 'Dominik W.', role: 'Order not received', time: '2 days ago' },
    { name: 'Kevin M.', role: 'Order not received...', time: '2 days ago' },
    { name: 'Ramona J.', role: 'Order not received', time: '1 week ago' },
    { name: 'Dominik W.', role: 'Order not received', time: '08.03.20' },
    { name: 'Kevin M.', role: 'Order not received', time: '06.03.20' },
  ];

  return (
    <ScrollArea className="h-[calc(100vh-120px)]">
      {users.map((user, index) => (
        <div 
          key={index} 
          className={`flex items-start space-x-4 py-4 px-6 hover:bg-gray-50 cursor-pointer ${selectedUser === user.name ? 'bg-gray-50' : ''}`}
          onClick={() => onSelectMessage(user.name)}
        >
          <Avatar className="w-10 h-10">
            <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${user.name}`} />
            <AvatarFallback>{user.name.split(' ')[0][0]}</AvatarFallback>
          </Avatar>
          <div className="flex-grow">
            <div className="flex justify-between items-start">
              <p className="font-semibold">{user.name}</p>
              <span className="text-xs text-gray-500">{user.time}</span>
            </div>
            <p className="text-sm text-gray-500 truncate">{user.role}</p>
          </div>
          {index === 0 && <div className="w-2 h-2 bg-blue-500 rounded-full"></div>}
        </div>
      ))}
    </ScrollArea>
  );
};

interface ChatHeaderProps {
  user: string;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ user }) => (
  <div className="grid md:flex items-center justify-between p-4 border-b">
    <div className="flex items-center space-x-4">
      <Avatar className="w-10 h-10">
        <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${user}`} />
        <AvatarFallback>{user.split(' ')[0][0]}</AvatarFallback>
      </Avatar>
      <div>
        <h2 className="font-semibold">{user}</h2>
        <p className="text-sm text-gray-500">order pending</p>
      </div>
    </div>
    <div className="flex items-center space-x-2">
      <Button variant="ghost" size="icon"><ThumbsUp className="h-4 w-4" /></Button>
      <Button variant="ghost" size="icon"><X className="h-4 w-4" /></Button>
      <Button variant="ghost" size="icon"><MoreVertical className="h-4 w-4" /></Button>
    </div>
  </div>
);

interface ChatMessagesProps {
  user: string;
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ user }) => (
  <ScrollArea className="container flex p-4">
    <div className="space-y-4">
      <div className="flex justify-center">
        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">09.03.20</span>
      </div>
      <div className="bg-blue-50 rounded-lg p-4 max-w-[70%]">
        <p className="font-semibold mb-1">{user}</p>
        <p className="text-sm">Hi Lena, I have not received my order .</p>
        <p className="text-sm mt-2">How long does it usually take for you to review an order?</p>
        <p className="text-xs text-gray-500 mt-2">Message sent 1 day ago</p>
      </div>
      <div className="flex justify-center">
        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">Today</span>
      </div>
      <div className="bg-white rounded-lg p-4 max-w-[70%] ml-auto">
        <p className="text-sm">Hi Julian,<br />sorry for the delayed response </p>
        <p className="text-sm mt-2">We will initiate a refund. The timeframe is a normal working day (~ 8 hours).</p>
        <p className="text-sm mt-2">If you have any questions feel free to message me here.</p>
        <p className="text-xs text-gray-500 mt-2">Message sent just now</p>
      </div>
    </div>
  </ScrollArea>
);

const ChatInput: React.FC = () => (
  <div className="border-t p-4">
    <Input className="mb-2" placeholder="Write your message..." />
    <div className="flex justify-between items-center">
      <div className="flex space-x-2">
        <Button variant="ghost" size="sm"><Bold className="h-4 w-4" /></Button>
        <Button variant="ghost" size="sm"><Italic className="h-4 w-4" /></Button>
        <Button variant="ghost" size="sm"><List className="h-4 w-4" /></Button>
      </div>
      <div className="flex space-x-2">
        <Button variant="ghost" size="sm"><Smile className="h-4 w-4" /></Button>
        <Button variant="ghost" size="sm"><Paperclip className="h-4 w-4" /></Button>
        <Button size="sm"><Send className="h-4 w-4 mr-2" />Send</Button>
      </div>
    </div>
  </div>
);

const MessagingInterface: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<string>("Julian Herbst");
  const [isMobileViewingMessages, setIsMobileViewingMessages] = useState<boolean>(false);

  const handleSelectMessage = (user: string) => {
    setSelectedUser(user);
    setIsMobileViewingMessages(true);
  };

  return (
    <div className="container flex h-screen bg-white">
      <div className={`w-full md:w-1/3 border-r ${isMobileViewingMessages ? 'hidden md:block' : 'grid'}`}>
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold mb-4">Messages <span className="text-sm font-normal text-gray-500">25</span></h1>
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Search" className="pl-10" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder="All Messages" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Messages</SelectItem>
              <SelectItem value="unread">Unread</SelectItem>
              <SelectItem value="important">Important</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <MessageList onSelectMessage={handleSelectMessage} selectedUser={selectedUser} />
      </div>
      <div className={`flex-1 flex flex-col ${isMobileViewingMessages ? 'grid' : 'hidden md:flex'}`}>
        <ChatHeader user={selectedUser} />
        <ChatMessages user={selectedUser} />
        <ChatInput />
      </div>
    </div>
  );
};

export default MessagingInterface;