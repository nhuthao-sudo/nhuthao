import { useState } from "react";

function Counter() {
    const {count, setCount} = useState(0);

    return (
        <div>
            <p>ban da ban {count} lan</p>
            <button onClick={() => setCount(count + 1)}>tang</button>
        </div>
    );
}