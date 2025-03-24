import { Plus } from "lucide-react"


const list = [
    {
        title: 'Alimentação',
        color: 'red'
    },
    {
        title: 'Transporte',
        color: 'blue'
    },
    {
        title: 'Saúde',
        color: 'green'
    },
    {
        title: 'Educação',
        color: 'yellow'
    },
    {
        title: 'Lazer',
        color: 'purple'
    },
    {
        title: 'Moradia',
        color: 'pink'
    },
    {
        title: 'Salário',
        color: 'gray'
    },
    {
        title: 'Investimentos',
        color: 'orange'
    },
    {
        title: 'Outros',
        color: 'indigo'
    },
]

export const LabelsPage = () => {

    return (
        <div className="px-10">
            <div className="flex justify-between items-center">
                <div >
                    <h1 className='text-base md:text-2xl font-bold'>Gerenciar Categorias Personalizada</h1 >
                    <p className="text-sm md:text-base">
                        A IA Finance já é capaz de identificar categorias automaticamente. No entanto, se preferir, você pode personalizar as categorias de acordo com suas necessidades.
                    </p>
                </div>

                <button className='flex justify-center items-center bg-white text-gray-500 rounded-2xl shadow-md p-2'>
                    <Plus size={20} />
                    <h1 className='px-2 hidden md:block'>Crie sua categoria</h1>
                </button>

            </div>


            <div className="grid grid-cols-1 md:grid-cols-4  gap-4 pt-10">
                {list.map((item, index) => (
                    <div key={index} className="col-span-1">
                        <div className={`bg-white rounded-2xl  shadow-md p-2 border-l-8 border-${item.color}-600`}>
                            <div className='p-2'>
                                <button>
                                    <h1 className=' font-semibold'>{item.title}</h1>
                                </button>
                            </div>

                            <div className='flex justify-center items-center '>
                                <button className='bg-gray-100 w-full rounded-xl'>Relatórios</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}