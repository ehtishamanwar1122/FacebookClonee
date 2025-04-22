
import React from 'react';
import { User, Users, Bookmark, Calendar, Video, Image } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const Sidebar = () => {
  return (
    <div className="w-[300px] hidden md:block p-4 overflow-y-auto h-[calc(100vh-56px)] sticky top-14">
      <div className="space-y-2">
        <SidebarItem icon={<User className="h-6 w-6" />} text="Ehtii" />
        <SidebarItem icon={<Users className="h-6 w-6" />} text="Friends" />
        <SidebarItem icon={<Bookmark className="h-6 w-6" />} text="Saved" />
        <SidebarItem icon={<Calendar className="h-6 w-6" />} text="Events" />
        <SidebarItem icon={<Video className="h-6 w-6" />} text="Videos" />
        <SidebarItem icon={<Image className="h-6 w-6" />} text="Photos" />
        
        <hr className="my-5 border-gray-300" />
        
        <h3 className="font-semibold text-gray-500 mb-2">Your shortcuts</h3>
        <SidebarItem text="Web Development Group" />
        <SidebarItem text="React Developers" />
        <SidebarItem text="UI/UX Design Tips" />
        <SidebarItem text="JavaScript Community" />
      </div>
    </div>
  );
};

interface SidebarItemProps {
  icon?: React.ReactNode;
  text: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text }) => {
  return (
    <div className="flex items-center space-x-3 p-2 hover:bg-facebook-grey rounded-lg cursor-pointer">
      {icon ? (
        <div className="text-facebook-blue">{icon}</div>
      ) : (
        <div className="w-6 h-6 bg-facebook-grey rounded-full"></div>
      )}
      <p className="font-medium">{text}</p>
    </div>
  );
};

export default Sidebar;
