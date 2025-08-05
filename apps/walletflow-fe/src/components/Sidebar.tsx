import { navItems } from '@/constant/navItems';
import { usePopUp } from '@/context/PopUpContext';
import { ChevronDown } from 'lucide-react';
import LogOut from './popOver/LogOut';


const Sidebar = () => {
  const name = "Dorcas";
  const {openPopOver} =usePopUp()

  return (
    <aside className="bg-white shadow-2xl w-[200px] h-[calc(100vh-80px)] rounded-2xl px-2 ">
      {/* Logo */}
      <img src="./sidebarlogo.png" alt="Sidebar Logo" className="px-6 py-7 w-full" />

      {/* User Info */}
      <div className="border rounded-full p-1.5 flex items-center justify-between mb-4"  onClick={()=>openPopOver(<LogOut/>)}>
        <div className="border rounded-full size-8 flex items-center justify-center text-xs bg-gray-200">
          MN
        </div>
        <div className="px-1 flex-1">
          <h2 className="font-semibold text-sm truncate">
            Ibrahim {name.substring(0, 4)}...
          </h2>
          <p className="text-xs text-gray-500 truncate">mike@gmail.co...</p>
        </div>
        <ChevronDown size={18} />
      </div>

      {/* Navigation Links */}
      <ul className="space-y-1 my-3 ">
        {navItems.map((item, index) => {
          if (index === 4) {
            return <li key="divider" className="border-t my-3" />;
          }

          const Icon = item.icon;

          return (
            <li
              key={item.label}
              className="px-4 py-2.5 flex items-center  gap-2 text-lg hover:bg-black hover:text-white hover:rounded-md cursor-pointer text-gray-600"
            >
            <span className=' mr-1'>  {Icon}</span>
              {item.label}
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
