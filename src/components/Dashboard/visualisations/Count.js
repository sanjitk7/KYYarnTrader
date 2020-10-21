import React from "react";
import {
    XYPlot,
    VerticalGridLines,
    HorizontalGridLines,
    YAxis,
    XAxis,
    VerticalBarSeries,
} from "react-vis";
import axios from 'axios';


//  Visualize which count got most inquires

function Count() {
    const [data, setData] = React.useState()
    const [loading, setLoading] = React.useState(true)



    React.useEffect(() => {
        axios.get("https://sanjit-yarn-trading-backend.herokuapp.com/visualisations/count-to-inquiries")
            .then((response) => {
                console.log("res data", response.data)
                setData(response.data)
                setLoading(false)

            }).catch(e => {
                console.log(e)
            })
    }, [])

    return (<div className="Count">
        <div>Yarn Count vs Inquires</div>
        <XYPlot height={300} width={700} color="#00000" xType="ordinal">
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis title="Yarn Count" style={{
                line: { stroke: "#285104" },
                ticks: { stroke: "#ADDDE1" },
                text: { stroke: "none", fill: "#6b6b76", fontWeight: 600 },
                title: { fill: "#6b6b76", fontWeight: 600 }
            }} />
            <YAxis title="Inquires" style={{
                line: { stroke: "#285104" },
                ticks: { stroke: "#ADDDE1" },
                text: { stroke: "none", fill: "#6b6b76", fontWeight: 600 },
                title: { fill: "#6b6b76", fontWeight: 600 }
            }} />
            {!loading && <VerticalBarSeries barWidth={0.4} data={data} />}
        </XYPlot>
    </div>
    );
}

export default Count;
