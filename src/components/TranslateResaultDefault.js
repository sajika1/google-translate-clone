import React from 'react';

function TranslateResaultDefault({input}) {

    const main = {
        fontSize:'23px',
        color: '#5f6368',
        flex: '1',
        padding:'20px 58px 20px 24px'
        
    }

    return (
        <div style={main}>
            {/* this is just test to show item in UI */}
            {/* //! to create this feature we need to declare an state like fine for example
                //! if find !== true we on translating... mode  
            */}
            {input.length >= 1 ? 
                <p>Translating ...</p>
                :
                <p>Translation</p>
            }
        </div>
    )
}

export default TranslateResaultDefault
