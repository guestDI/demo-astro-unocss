import { useEffect, useState } from 'react';

export default function LiveClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg text-white">
      <p className="text-lg font-medium mb-2 opacity-90">Current time:</p>
      <p className="text-3xl font-mono font-bold">{time.toLocaleTimeString()}</p>
      <div className="mt-3 text-sm opacity-75">
        {time.toLocaleDateString()}
      </div>
    </div>
  );
} 