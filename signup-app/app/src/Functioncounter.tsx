import { useState } from "react";
import Button from "@mui/material/Button";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>+
            <h1>Count: {count}</h1>
            <Button variant="contained" onClick={() => setCount(count + 1)} sx={{ mr: 2 }}>
                Increment
            </Button>


            <Button variant="outlined" onClick={() => setCount(count - 1)} sx={{ mr: 2 }}>
                Decrement
            </Button>
        </div>
    );
}

export default Counter;