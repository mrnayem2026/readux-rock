
function App() {

  return (
    <div className="h-screen w-full flex justify-center items-center">
     <div className="border border-emerald-500 p-4">
        <button className="py-2 px-4 bg-purple-400 rounded-lg cursor-pointer text-xl font-bold text-white">Increment</button>
        <span className="mx-6 text-xl">0</span>
        <button className="py-2 px-4 bg-sky-500 rounded-lg cursor-pointer text-xl font-bold text-white">Decrement</button>
     </div>
    </div>
  )
}

export default App
