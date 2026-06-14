import React, { useRef } from "react";

function Logbutton() {
    const count = useRef(0);

    const checkRef = () => {
        count.current++;
        console.log('count value ', count.current);
    };

    return (
        <div>
            <button onClick={checkRef}>Click</button>
        </div>
    );
}

export default Logbutton;