import React from "react";
import {
    XYPlot,
    VerticalGridLines,
    HorizontalGridLines,
    VerticalBarSeries,
    YAxis,
    XAxis,
    RadialChart,
} from "react-vis";
import axios from "axios";

function State() {
    const [pieData, setPieData] = React.useState();
    const [barData, setBarData] = React.useState();
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        axios
            .get("https://sanjit-yarn-trading-backend.herokuapp.com/visualisations/state-to-inquiries-pie")
            .then((response) => {
                console.log("res data", response.data);
                setPieData(response.data);
                setLoading(false);
            })
            .catch((e) => {
                console.log(e);
            });

        axios
            .get("https://sanjit-yarn-trading-backend.herokuapp.com/visualisations/state-to-inquiries-bar")
            .then((response) => {
                console.log("res data", response.data);
                setBarData(response.data);
                setLoading(false);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    return (
        <div className="State">
            {console.log(pieData)}
            <div>Regions and Inquiries</div>

            <XYPlot height={400} width={500} xType="ordinal">
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis
                    title="Region"
                    style={{
                        line: { stroke: "#4169E1" },
                        ticks: { stroke: "#ADDDE1" },
                        text: { stroke: "none", fill: "#6b6b76", fontWeight: 600 },
                        title: { fill: "#6b6b76", fontWeight: 600 }
                    }}
                />
                <YAxis
                    title="Interest/Inquiries"
                    style={{
                        line: { stroke: "#4169E1" },
                        ticks: { stroke: "#ADDDE1" },
                        text: { stroke: "none", fill: "#6b6b76", fontWeight: 600 },
                        title: { fill: "#6b6b76", fontWeight: 600 }
                    }}
                />
                {!loading && (
                    <VerticalBarSeries barWidth={0.28} color="#FF7F50" data={barData} />
                )}
            </XYPlot>

            {!loading && (
                <RadialChart
                    showLabels={true}
                    data={pieData}
                    width={300}
                    height={300}
                    labelsStyle={{
                        stroke: "none", fill: "black", fontSize: 12, fontStyle: "italic"
                    }}
                />
            )}
        </div>
    );
}

export default State;
