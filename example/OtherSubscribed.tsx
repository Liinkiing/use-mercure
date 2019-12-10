import * as React from 'react';
import {useMercure} from '../.'

const OtherSubscribed: React.FC = () => {
    useMercure('https://example.com/other', data => {
        console.log(data)
    })
    return (
        <div>
            OtherSubscribed component
        </div>
    )
}

export default OtherSubscribed
