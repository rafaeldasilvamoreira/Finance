import LOGO from '../../assets/LOGO.jpg'
import { Link, Outlet } from 'react-router-dom'
import { ChartNoAxesCombined, House, LogOut, Settings, Tag } from 'lucide-react'

export const RootLayout = () => {


    return (
        <div className='bg-[#f4f4f4] h-screen overflow-hidden flex flex-col'>

            <div className='flex bg-[#09293D] px-20 py-1 justify-between shadow-md'>
                <div>
                    <img className='h-14' src={LOGO} alt="logo" />
                </div>
                <div className='flex justify-around items-center font-semibold text-[#f4f4f4] gap-10'>
                    <Link to='/Home'>
                        <button className='flex px-2 py-2 rounded-t-md hover hover:bg-[#f4f4f4] hover:text-[#123941]  justify-center items-center'>
                            <House size={20} />
                            <h1 className='pl-3'>Home</h1>
                        </button>
                    </Link>
                    <Link to='/Dashboard'>
                        <button className='flex px-2 py-2 rounded-t-md hover hover:bg-[#f4f4f4] hover:text-[#123941]  justify-center items-center'>
                            <ChartNoAxesCombined size={20} />
                            <h1 className='pl-3'>Dashboard</h1>
                        </button>
                    </Link>
                    <Link to='/Etiquetas'>
                        <button className='flex px-2 py-2 rounded-t-md hover hover:bg-[#f4f4f4] hover:text-[#123941]  justify-center items-center'>
                            <Tag size={20} />
                            <h1 className='pl-3'>Etiquetas</h1>
                        </button>
                    </Link>
                    <Link to='/Configuracao'>
                        <button className='flex px-2 py-2 rounded-t-md hover hover:bg-[#f4f4f4] hover:text-[#123941] justify-center items-center'>
                            <Settings size={20} />
                            <h1 className='pl-3'>Configuração</h1>
                        </button>
                    </Link>
                </div>
                <div className='flex justify-center items-center font-semibold text-[#f4f4f4]'>
                    <button className='flex px-2 py-2 rounded-t-md hover hover:text-red-600 justify-center items-center'>
                        <LogOut size={20} />
                    </button>
                </div>
            </div>

            <div className='py-10 overflow-y-auto flex-1'>
                <Outlet />
            </div>

        </div>
    )
}