import { useState } from "react";
function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)} sx={{ mr: 2 }}>
                Increment
            </button>


            <button onClick={() => setCount(count - 1)} sx={{ mr: 2 }}>
                Decrement
            </button>
        </div>
    );
}

export default Counter;