import React, { useState } from 'react';

import { MultipleCustomHooks } from '../examples/MultipleCustomHooks';

import '../useEffect/effect.css';

export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    return (
        <div>
            <h1>RealExampleRef</h1>
            <hr />

            { show && <MultipleCustomHooks />}

            <button 
                className="btn btn-primary mt-5"
                onClick={ () => {
                    setShow( !show )
                }}
                >
                show/Hide
            </button>

        </div>
    )
}
