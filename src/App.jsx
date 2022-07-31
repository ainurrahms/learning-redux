import { useState } from "react";
import Home from '@/features/Home/Home'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <p>Hello World</p>
        <Home/>
      </div>
    </div>
  );
}

export default App;
