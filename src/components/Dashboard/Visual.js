import React from 'react'
import Avg from './visualisations/Avg'
import Count from './visualisations/Count'
import Inq from './visualisations/Inq'
import State from './visualisations/State'

function Visual() {
    return (
        <div>
            <Avg />
            <Count />
            <Inq />
            <State />
        </div>
    )
}

export default Visual;