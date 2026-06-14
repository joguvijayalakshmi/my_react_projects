import { useState, useEffect } from "react";
import Button from "@mui/material/Button";

function Timer() {
    const [count, setCount] = useState(0);

    useEffect(() => {

        console.log("useEffect called");

        const timer = setTimeout(() => {
            setCount((prevCount) => prevCount + 1);
        }, 1000);

        return () => {
            console.log("Cleanup function called");
            clearTimeout(timer);
        }
    }, [count]);

    return (
        <div>
            <h2>Count: {count}</h2>
            <Button variant="contained" onClick={() => setCount(count + 1)} sx={{ mr: 2 }}>
                Increment
            </Button>
            <Button variant="outlined" onClick={() => setCount(count - 1)} sx={{ mr: 2 }}>
                Decrement
            </Button>
        </div>
    );
}

export default Timer;