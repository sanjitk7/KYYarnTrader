import React from "react";
import {
    XYPlot,
    VerticalGridLines,
    HorizontalGridLines,
    YAxis,
    XAxis,
    HorizontalBarSeries,
} from "react-vis";
import axios from 'axios';


// Average Purchase Size for Each Product

function Avg() {
    const [data, setData] = React.useState()
    const [loading, setLoading] = React.useState(true)



    React.useEffect(() => {
        axios.get("https://sanjit-yarn-trading-backend.herokuapp.com/visualisations/avg-pdt-purchase-size")
            .then((response) => {
                console.log("res data", response.data)
                setData(response.data)
                setLoading(false)

            }).catch(e => {
                console.log(e)
            })
    }, [])

    return (<div className="Avg">
        <div>Average Purchase Size vs Product</div>
        <XYPlot height={300} width={1200} color="#285104" yType="ordinal">
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis title="Purchase Size (in Bags i.e 150 Kgs)" style={{
                line: { stroke: '#000000' },
                ticks: { stroke: '#ADDDE1' },
                text: { stroke: 'none', fill: '#6b6b76', fontWeight: 1000 }
            }} />
            <YAxis style={{
                line: { stroke: '#000000' },
                ticks: { stroke: '#ADDDE1' },
                text: { stroke: 'none', fill: '#6b6b76', fontWeight: 1000 }
            }} />
            <YAxis orientation="right" title="Product Specific Code" style={{
                line: { stroke: '#ADDDE1' },
                ticks: { stroke: '#ADDDE1' },
                text: { stroke: 'none', fill: '#6b6b76', fontWeight: 1000 }
            }} />
            {!loading && <HorizontalBarSeries barWidth={0.5} data={data} />}
        </XYPlot>
    </div>
    );
}

export default Avg;
