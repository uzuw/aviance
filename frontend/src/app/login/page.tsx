

const LoginPage = () => {
  return (
    <div>
        <h1 className="text-3xl font-bold text-center mt-10">Login</h1>
        <form className="max-w-md mx-auto mt-8 space-y-6">
            <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
                type="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
                type="password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            </div>
            <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
            Login
            </button>
        </form>
    </div>
  )
}

export default LoginPage;
