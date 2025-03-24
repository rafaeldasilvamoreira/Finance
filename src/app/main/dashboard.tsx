import { CircleArrowLeft, CircleArrowRight, CircleArrowUp, Eye, RefreshCcw } from "lucide-react"


export const DashboardPage = () => {


    return (
        <div className="px-10">
            <div className='flex justify-between'>
                <div className='flex justify-center items-center'>
                    <CircleArrowLeft />
                    <h1 className='text-3xl font-bold px-4'>Março</h1 >
                    <CircleArrowRight />
                </div>
                <div >
                    <button className='flex justify-center items-center bg-white text-gray-500 px-20 py-1 rounded-xl shadow-md'>
                        <RefreshCcw size={20} />
                        <h1 className='pl-4'>Atualizar</h1>
                    </button>

                </div>
            </div>
            <div className=' flex gap-2 pl-10 pt-10 '>
                <div className='bg-white w-sm shadow-md p-6 rounded-2xl '>
                    <h1 className='text-green-600 font-semibold'>Total a Receber</h1>
                    <div className='flex justify-between items-center p-2'>
                        <div className='flex justify-center items-center text-green-600'>
                            <CircleArrowUp size={20} />
                            <h1 className='pl-4 text-2xl font-semibold'>0,00</h1>
                        </div>
                        <Eye className='text-gray-500' size={20} />
                    </div>
                    <div className='text-gray-500'>
                        <h1>1 Mar. - 31 Mar.</h1>
                    </div>
                </div>

                <div className='bg-white w-sm shadow-md p-6 rounded-2xl '>
                    <h1 className='text-red-600 font-semibold'>Total a Pagar</h1>
                    <div className='flex justify-between items-center p-2'>
                        <div className='flex justify-center items-center text-red-600'>
                            <CircleArrowUp size={20} />
                            <h1 className='pl-4 text-2xl font-semibold'>0,00</h1>
                        </div>
                        <Eye className='text-gray-500' size={20} />
                    </div>
                    <div className='text-gray-500'>
                        <h1>1 Mar. - 31 Mar.</h1>
                    </div>
                </div>
            </div>

            <div className='flex pl-10 pt-8 '>
                <div className='bg-white w-6xl shadow-md p-6 rounded-2xl '>
                    <h1 className=' font-semibold'>Planeje sua grana</h1>
                    <h2 className='text-gray-500'>Lançamentos futuros de contas a pagar e receber.</h2>
                </div>
            </div>
        </div>
    )
}