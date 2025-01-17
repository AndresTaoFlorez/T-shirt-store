
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen pt-28">
      <main className="flex flex-col flex-1 items-center h-full w-full bg-gray-100 p-4 ">
        {children}
      </main>
      <footer className="bg-gray-800 text-white p-4">
        <p>&copy; 2023 My App</p>
      </footer>
    </div>
  );
}

export default Layout;