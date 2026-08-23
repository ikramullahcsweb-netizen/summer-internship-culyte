import useCounterStore from './store/useCounterStore';

function Counter() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset);

  return (
    <div className="flex flex-col items-center gap-3 p-4">
      <h2 className="text-xl font-bold">Count: {count}</h2>
      <div className="flex gap-2">
        <button onClick={decrement} className="px-3 py-1 bg-red-500 text-white rounded">-</button>
        <button onClick={reset} className="px-3 py-1 bg-gray-500 text-white rounded">Reset</button>
        <button onClick={increment} className="px-3 py-1 bg-green-500 text-white rounded">+</button>
      </div>
    </div>
  );
}

export default Counter;