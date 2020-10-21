import React from "react";
import {
    XYPlot,
    VerticalGridLines,
    HorizontalGridLines,
    YAxis,
    XAxis,
    LineSeries,
} from "react-vis";
import axios from "axios";

function Inq() {
    const [data, setData] = React.useState();
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        axios
            .get("https://sanjit-yarn-trading-backend.herokuapp.com/visualisations/product-to-inquiry-count")
            .then((response) => {
                console.log("res data", response.data);
                setData(response.data);
                setLoading(false);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    console.log("hello", data);

    return (
        <div className="Inq">
            <div>Overall Inquiry data vs Products</div>
            <XYPlot title="Hello" height={400} width={500} xType="ordinal">
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis title="Product Specific Code" style={{
                    line: { stroke: "#FF7F50" },
                    ticks: { stroke: "#ADDDE1" },
                    text: { stroke: "none", fill: "#6b6b76", fontWeight: 600 },
                    title: { fill: "#6b6b76", fontWeight: 600 }
                }} />
                <YAxis title="Inquires" style={{
                    line: { stroke: "#FF7F50" },
                    ticks: { stroke: "#ADDDE1" },
                    text: { stroke: "none", fill: "#6b6b76", fontWeight: 600 },
                    title: { fill: "#6b6b76", fontWeight: 600 }
                }} />
                {console.log("dataPdtInq:", data)}
                {!loading && <LineSeries color="#0080ff" data={data} />}
            </XYPlot>
        </div>
    );
}

export default Inq;
