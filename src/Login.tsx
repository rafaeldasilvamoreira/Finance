import { Link } from 'react-router-dom'
import './styles/globals.css'

function Login() {
    return (
        <div>
            <div className='flex justify-center items-center h-screen'>
                <div>
                    <h1 className='text-3xl font-bold'>Login</h1>
                    <Link to='/'>Entrar</Link>
                </div>
            </div>
        </div>
    )
}

export default Login
