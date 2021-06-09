import React from 'react'

export const ShowIncrement = React.memo(({ incrementar }) => {

    console.log('Me volvi a ejecutar');

    return (
        <div>
            <button
                className="btn btn-primary"
                onClick={ () => {
                    incrementar( 5 );
                }}
            >
                incrementar
            </button>
        </div>
    )
})
