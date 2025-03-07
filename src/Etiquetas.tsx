import { Plus } from 'lucide-react'
import './styles/globals.css'

function Etiquetas() {
    return (
        <div>
            <div className='pl-10 pt-10 '>
                <h1 className='text-2xl font-bold'>Gerenciar Categorias Personalizada</h1 >
                <h2>
                    A IA Finance já é capaz de identificar categorias automaticamente. No entanto, se preferir, você pode personalizar as categorias de acordo com suas necessidades.
                </h2>
            </div>
            <div className='pt-6 px-10'>
                <button className='flex justify-center items-center bg-white text-gray-500 rounded-2xl shadow-md p-2'>
                    <Plus size={20} />
                    <h1 className='px-2'>Crie sua categoria</h1>
                </button>
            </div>

            <div className='pt-6 px-10'>
                <div className=' bg-white w-md rounded-2xl shadow-md p-2 border-l-8 border-red-600'>
                    <div className='p-2'>
                        <button>
                            <h1 className=' font-semibold'>Alimentação</h1>
                        </button>
                    </div>

                    <div className='flex justify-center items-center '>
                        <button className='bg-gray-100 px-42 py-1 rounded-xl'>Relatórios</button>
                    </div>
                </div>
            </div>

            <div className='pt-4 px-10'>
                <div className=' bg-white w-md rounded-2xl shadow-md p-2 border-l-8 border-green-600'>
                    <div className='p-2'>
                        <button>
                            <h1 className=' font-semibold'>Casa</h1>
                        </button>
                    </div>

                    <div className='flex justify-center items-center '>
                        <button className='bg-gray-100 px-42 py-1 rounded-xl'>Relatórios</button>
                    </div>
                </div>
            </div>

            <div className='pt-4 px-10'>
                <div className=' bg-white w-md rounded-2xl shadow-md p-2 border-l-8 border-blue-600'>
                    <div className='p-2'>
                        <button>
                            <h1 className=' font-semibold'>Automóvel</h1>
                        </button>
                    </div>

                    <div className='flex justify-center items-center '>
                        <button className='bg-gray-100 px-42 py-1 rounded-xl'>Relatórios</button>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Etiquetas