import * as React from 'react';
import {useState} from 'react';
import {useMercure} from '../.'
import OtherSubscribed from './OtherSubscribed'

const Subscribed: React.FC = () => {
    const [showOther, setShowOther] = useState(true)
    useMercure('https://example.com/topic', data => {
        console.log(data)
    })
    return (
        <div>
            <p>Subscribed component</p>
            <button onClick={() => {
                setShowOther(v => !v)
            }}>Toggle OtherSubscribed
            </button>
            {showOther && <OtherSubscribed/>}
        </div>
    )
}

export default Subscribed
