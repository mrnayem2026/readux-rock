import { useDispatch, useSelector } from "react-redux"
import { decrement, decrementByFive, increment, incrementByFive } from "./redux/features/counterSlice";

function App() {

  const count = useSelector((state)=>state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="h-screen w-full flex justify-center items-center">
     <div className="border border-emerald-500 p-4">
        <button onClick={()=>dispatch(incrementByFive(5))}  className="py-2 px-4 bg-purple-400 rounded-lg cursor-pointer text-xl font-bold text-white">Increment By 5</button>
        <button onClick={()=>dispatch(increment())}  className="py-2 px-4 bg-purple-400 rounded-lg cursor-pointer text-xl font-bold text-white">Increment</button>
        <span className="mx-6 text-xl">{count}</span>
        <button  onClick={()=>dispatch(decrement())}  className="py-2 px-4 bg-sky-500 rounded-lg cursor-pointer text-xl font-bold text-white">Decrement</button>
        <button  onClick={()=>dispatch(decrementByFive(5))}  className="py-2 px-4 bg-sky-500 rounded-lg cursor-pointer text-xl font-bold text-white">Decrement by 5</button>
     </div>
    </div>
  )
}

export default App
