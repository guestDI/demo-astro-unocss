import { useEffect, useState } from 'react';

export default function LiveClock() {
  const [hydrated, setHydrated] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setHydrated(true);
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg text-white relative">
      <span className="absolute top-4 left-4 bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold">Dynamic Island</span>
      {hydrated && <span className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded text-xs font-bold animate-bounce">Hydrated!</span>}
      <p className="text-lg font-medium mb-2 opacity-90">Current time:</p>
      <p className="text-3xl font-mono font-bold">{time.toLocaleTimeString()}</p>
      <div className="mt-3 text-sm opacity-75">
        {time.toLocaleDateString()}
      </div>
    </div>
  );
} 