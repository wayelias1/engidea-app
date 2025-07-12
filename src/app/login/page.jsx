const Login = () => {
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="w-full max-w-md bg-gray-800 text-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Iniciar sesión</h2>
        
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm mb-1">Correo electrónico</label>
            <input type="email" id="email" className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="usuario@correo.com" />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm mb-1">Contraseña</label>
            <input type="password" id="password" className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••" />
          </div>
          
          <button type="submit" className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-md transition cursor-pointer">Entrar</button>
        </form>

        <p className="text-center text-sm mt-6 text-gray-400">
          ¿No tienes cuenta? <a href="#" className="text-blue-400 hover:underline">Regístrate</a>
        </p>
      </div>
    </div>
    </>
  )
}

export default Login