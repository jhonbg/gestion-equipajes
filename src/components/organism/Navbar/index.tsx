import Image from "next/image";
import Buttom from '@/components/atoms/Buttom'
import {Icon} from '@iconify/react'

const Index = () => {
    return (
      <nav className='w-full flex flex-row bg-[#0C7ABE] justify-between items-center h-20 px-6'>
        <div>
          <Icon className='h-10 w-10' icon='material-symbols:menu' color="white"/>
        </div>
        <div className='flex items-center flex-col text-white'>
          <Image src='/reservas-icons/logo.png' alt='logo' width={60} height={20} />
          <span className="ml-2">Singapur Airline</span>
        </div>
        
        <div className="flex items-center">
          <Buttom />
          <Image src='/reservas-icons/UN.png' alt='UN' width={60} height={20} />
        </div>
      </nav>
    );
  };

export default Index;