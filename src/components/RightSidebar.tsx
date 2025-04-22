
import React from 'react';
import { Search, Video, MoreHorizontal } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';

const RightSidebar = () => {
  const contacts = [
    { id: 1, name: 'Remat', online: true, image: 'https://i.pravatar.cc/100?img=1' },
    { id: 2, name: 'Saleem', online: true, image: 'https://i.pravatar.cc/100?img=2' },
    { id: 3, name: 'Anar Kali', online: false, image: 'https://i.pravatar.cc/100?img=3' },
    { id: 4, name: 'Bravo', online: true, image: 'https://i.pravatar.cc/100?img=4' },
    { id: 5, name: 'Chris Gayle', online: false, image: 'https://i.pravatar.cc/100?img=5' },
    { id: 6, name: 'Ibrar Arshad', online: true, image: 'https://i.pravatar.cc/100?img=6' },
    { id: 7, name: 'Abdul Haseeb', online: true, image: 'https://i.pravatar.cc/100?img=7' },
  ];

  return (
    <div className="w-[300px] hidden lg:block p-4 overflow-y-auto h-[calc(100vh-56px)] sticky top-14">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-gray-500 font-semibold">Contacts</h2>
        <div className="flex space-x-2">
          <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
            <Video className="h-5 w-5 text-gray-500" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
            <Search className="h-5 w-5 text-gray-500" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
            <MoreHorizontal className="h-5 w-5 text-gray-500" />
          </Button>
        </div>
      </div>

      <div className="space-y-1">
        {contacts.map((contact) => (
          <Contact 
            key={contact.id} 
            name={contact.name} 
            image={contact.image} 
            online={contact.online} 
          />
        ))}
      </div>
    </div>
  );
};

interface ContactProps {
  name: string;
  image: string;
  online: boolean;
}

const Contact: React.FC<ContactProps> = ({ name, image, online }) => {
  return (
    <div className="flex items-center space-x-3 p-2 hover:bg-facebook-grey rounded-lg cursor-pointer">
      <div className="relative">
        <Avatar className="h-8 w-8">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        {online && (
          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></span>
        )}
      </div>
      <p className="font-medium">{name}</p>
    </div>
  );
};

export default RightSidebar;
