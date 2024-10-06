"use client"

import React, { useState } from 'react';
import { Search, Plus, Star, MoreVertical, Paperclip, Smile, Mic, ArrowLeft } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface MessageListProps {
  onSelectMessage: (user: string) => void;
  selectedUser: string | null;
}

const MessageList: React.FC<MessageListProps> = ({ onSelectMessage, selectedUser }) => {
  const users = ['Marvin McKinney', 'Robert Fox', 'Dianne Russell', 'Floyd Miles', 'Cameron Williamson', 'Jane Cooper'];

  return (
    <ScrollArea className="h-[calc(100vh-180px)]">
      {users.map((name, index) => (
        <div 
          key={index} 
          className={`flex items-center space-x-4 py-2 px-4 hover:bg-gray-100 cursor-pointer ${selectedUser === name ? 'bg-gray-100' : ''}`}
          onClick={() => onSelectMessage(name)}
        >
          <Avatar>
            <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${name}`} />
            <AvatarFallback>{name.split(' ').map((n: string) => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div className="flex-grow">
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-gray-500">I have not recieved my order.</p>
          </div>
          <span className="text-blue-500">✓</span>
        </div>
      ))}
    </ScrollArea>
  );
};

interface ChatHeaderProps {
  user: string;
  onBack: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ user, onBack }) => (
  <div className="flex items-center justify-between p-4 border-b">
    <div className="flex items-center space-x-2">
      <Button variant="ghost" size="icon" className="md:hidden" onClick={onBack}>
        <ArrowLeft className="h-4 w-4" />
      </Button>
      <Avatar>
        <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${user}`} />
        <AvatarFallback>{user.split(' ').map((n: string) => n[0]).join('')}</AvatarFallback>
      </Avatar>
      <span className="font-semibold">{user}</span>
    </div>
    <Button variant="ghost" size="icon">
      <MoreVertical className="h-4 w-4" />
    </Button>
  </div>
);

interface ChatMessagesProps {
  user: string;
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ user }) => (
  <ScrollArea className="h-[calc(100vh-240px)] p-4">
    <div className="space-y-4">
      <div className="flex items-start space-x-2">
        <Avatar>
          <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${user}`} />
          <AvatarFallback>{user.split(' ').map((n: string) => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <div className="bg-gray-100 rounded-lg p-2 max-w-[70%]">
          <p>Hello! Sir. Good morning. How are you? 😊</p>
          <p className="text-xs text-gray-500 mt-1">1 hour ago</p>
        </div>
      </div>
      <div className="flex items-start space-x-2 justify-end">
        <div className="bg-blue-500 text-white rounded-lg p-2 max-w-[70%]">
          <p>I am good, thanks! How can I help you?</p>
          <p className="text-xs text-gray-200 mt-1">11 min ago</p>
        </div>
      </div>
      {/* Additional messages... */}
    </div>
  </ScrollArea>
);

const ChatInput: React.FC = () => (
  <div className="border-t p-4">
    <div className="flex items-center space-x-2">
      <Button variant="ghost" size="icon">
        <Paperclip className="h-4 w-4" />
      </Button>
      <Input className="flex-grow" placeholder="Write your message..." />
      <Button variant="ghost" size="icon">
        <Smile className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon">
        <Mic className="h-4 w-4" />
      </Button>
    </div>
  </div>
);

const MessagingInterface: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  const handleSelectMessage = (user: string) => {
    setSelectedUser(user);
  };

  const handleBack = () => {
    setSelectedUser(null);
  };

  return (
    <div className="flex h-screen bg-white">
      <div className={`w-full md:w-1/3 border-r ${selectedUser ? 'hidden md:block' : 'block'}`}>
        <div className="p-4 border-b">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Messages</h2>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon">
                <Search className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Plus className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Star className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">Customers</Button>
            <Button variant="ghost" size="sm">Newest</Button>
          </div>
        </div>
        <MessageList onSelectMessage={handleSelectMessage} selectedUser={selectedUser} />
      </div>
      <div className={`flex-1 flex flex-col ${selectedUser ? 'block' : 'hidden md:flex'}`}>
        {selectedUser && (
          <>
            <ChatHeader user={selectedUser} onBack={handleBack} />
            <ChatMessages user={selectedUser} />
            <ChatInput />
          </>
        )}
      </div>
    </div>
  );
};

export default MessagingInterface;