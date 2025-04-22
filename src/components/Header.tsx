
import React from 'react';
import { Home, Users, Video, Search, MessageSquare, Bell, Menu, User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Input } from './ui/input';
import { cn } from '@/lib/utils';

const Header = () => {
  return (
    <header className="sticky top-0 bg-white shadow-sm z-50 px-4">
      <div className="flex items-center justify-between h-14 max-w-6xl mx-auto">
        {/* Left Side - Logo and Search */}
        <div className="flex items-center gap-2 w-1/4">
          <div className="text-facebook-blue font-bold text-3xl">f</div>
          <div className="relative hidden md:block flex-grow">
            <Search className="absolute top-2.5 left-3 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search Facebook"
              className="pl-9 bg-facebook-grey rounded-full h-9 w-full"
            />
          </div>
        </div>

        {/* Middle - Navigation */}
        <nav className="flex items-center justify-center flex-1">
          <NavItem icon={<Home />} active />
          <NavItem icon={<Users />} />
          <NavItem icon={<Video />} />
        </nav>

        {/* Right Side - User Controls */}
        <div className="flex items-center justify-end gap-2 w-1/4">
          <IconButton icon={<Menu />} />
          <IconButton icon={<MessageSquare />} />
          <IconButton icon={<Bell />} />
          <Avatar className="h-9 w-9 cursor-pointer">
            <AvatarImage src="https://github.com/shadcn.png" alt="User" />
            <AvatarFallback>
              <User className="h-5 w-5" />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, active }) => {
  return (
    <div 
      className={cn("flex items-center justify-center h-14 px-4 cursor-pointer mx-1 md:px-10", 
        active 
          ? "text-facebook-blue border-b-4 border-facebook-blue" 
          : "text-gray-500 hover:bg-facebook-grey rounded-md"
      )}
    >
      {icon}
    </div>
  );
};

interface IconButtonProps {
  icon: React.ReactNode;
}

const IconButton: React.FC<IconButtonProps> = ({ icon }) => {
  return (
    <div className="h-9 w-9 rounded-full bg-facebook-grey flex items-center justify-center cursor-pointer hover:bg-gray-300">
      {icon}
    </div>
  );
};

export default Header;
