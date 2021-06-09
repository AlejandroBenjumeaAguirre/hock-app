import React, { useRef } from 'react';
import '../useEffect/effect.css';

export const Focussceen = () => {

    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.select();
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />
            <input
                ref={inputRef}
                className="form-control"
                placeholder="Su nombre"
            />

            <buton 
                className="btn btn-primary mt-5"
                onClick={handleClick}
            >
                Focus
            </buton>
        </div>

    )
}
