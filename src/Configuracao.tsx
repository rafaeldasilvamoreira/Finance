import './styles/globals.css'

function Configuracao() {
    return (
        <div>
            <div className='pl-10 pt-10 pb-6'>
                <h1 className='text-2xl font-bold'>Planos e Preços</h1 >
            </div>
            <div className='flex justify-center items-center'>
                <div className='bg-white shadow-md rounded-xl w-7xl'>
                    <h1 className='text-2xl font-semibold pl-4 pt-4'>Seus Dados</h1 >
                    <div className='p-6'>
                        <div className='flex'>
                            <h1 className='flex font-semibold pr-2'>Nome:</h1>
                            <h1>Xipola</h1>
                        </div>
                        <div className='flex'>
                            <h1 className='flex font-semibold pr-2'>Telefone:</h1>
                            <h1>(19) 99999-9999</h1>
                        </div>
                        <div className='flex'>
                            <h1 className='flex font-semibold pr-2'>E-mail:</h1>
                            <h1>rafaelm@gmail.com</h1>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Configuracao
