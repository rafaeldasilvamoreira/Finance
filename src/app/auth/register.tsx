import LOGO from '../../assets/LOGO.jpg'
export const AuthRegister = () => {
    const users = [
        {
            id: 123456789,
            name: 'Lucas',
            phone: '123456789'
        },
        {
            id: 987654321,
            name: 'Pedro',
            phone: '987654321'
        },
        {
            id: 741258963,
            name: 'Maria',
            phone: '741258963'
        }
    ]

    return (
        <div className="bg-[#f4f4f4] h-screen flex items-center justify-between">
            <div className="max-w-2xl mx-auto bg-white rounded-md" >
                <div className='flex flex-col items-center p-4'>
                    <h1 className="text-2xl text-[#09293D] font-bold">Cadastre-se</h1>
                    <form className="flex flex-col gap-4 mt-4">
                        <input type="text" placeholder="Nome" className="border p-2 rounded-md" />
                        <input type="text" placeholder="Telefone" className="border p-2 rounded-md" />
                        <button type="submit" className="bg-[#09293D] text-white p-2 rounded-md">Cadastrar</button>
                    </form>
                </div>
                {users.map(user => (
                    <div key={user.id} className='flex flex-col bg-amber-400 items-center rounded-2xl m-2'>
                        <div >
                            <p className='font-semibold'>Nome:
                                <span className='font-normal'>{user.name}</span>
                            </p>
                            <p className='font-semibold'>Telefone:
                                <span className='font-normal'>{user.phone}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className='flex  flex-col justify-center items-center bg-[#09293D] text-[#f4f4f4] w-1/2 h-screen'>
                <img className='h-36' src={LOGO} alt="logo" />
            </div>
        </div>
    )
}