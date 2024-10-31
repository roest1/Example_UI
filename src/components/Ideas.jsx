import { Box } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";
import { ResponsiveLine } from "@nivo/line";
import "../styles/ideas.css";


const themeColors = {
    fontFamily: '"Inter", sans-serif',
    bgColor: '#252954',
    bodyColor: '#9b9ca7',
    mainBg: '#0e0e23',
    primaryColor: '#4255d4',
    cardBg: 'rgb(26, 32, 73)',
    cardBgGradient: 'radial-gradient(circle, rgba(26, 32, 73, 1) 0%, rgba(19, 22, 47, 1) 100%)',
    textColor: '#fff',
    // Add other colors as needed
};


const LineChart = () => {
    
    // Fake emissions tracking time series data
    const data = [
        {
            id: "Emissions",
            color: themeColors.primaryColor,
            data: [
                { x: "Jan", y: 30 },
                { x: "Feb", y: 45 },
                { x: "Mar", y: 35 },
                { x: "Apr", y: 50 },
                { x: "May", y: 40 },
                { x: "Jun", y: 55 },
                { x: "Jul", y: 60 },
                { x: "Aug", y: 65 },
                { x: "Sep", y: 55 },
                { x: "Oct", y: 70 },
                { x: "Nov", y: 65 },
                { x: "Dec", y: 75 },
            ],
        },
    ];

    return (
        <ResponsiveLine
            data={data}
            theme={{
                axis: {
                    domain: {
                        line: {
                            stroke: themeColors.bodyColor,
                        },
                    },
                    legend: {
                        text: {
                            fill: themeColors.bodyColor,
                        },
                    },
                    ticks: {
                        line: {
                            stroke: themeColors.bodyColor,
                            strokeWidth: 1,
                        },
                        text: {
                            fill: themeColors.bodyColor,
                        },
                    },
                },
                legends: {
                    text: {
                        fill: themeColors.bodyColor,
                    },
                },
                tooltip: {
                    container: {
                        color: themeColors.textColor,
                        background: themeColors.cardBg,
                    },
                },
            }}
            colors={[themeColors.primaryColor]}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: "point" }}
            yScale={{
                type: "linear",
                min: 0,
                max: "auto",
                stacked: false,
                reverse: false,
            }}
            yFormat=" >-.2f"
            curve="catmullRom"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                orient: "bottom",
                tickSize: 0,
                tickPadding: 5,
                tickRotation: 0,
                legend: "Month",
                legendOffset: 36,
                legendPosition: "middle",
            }}
            axisLeft={{
                orient: "left",
                tickValues: 5,
                tickSize: 3,
                tickPadding: 5,
                tickRotation: 0,
                legend: "Emissions",
                legendOffset: -40,
                legendPosition: "middle",
            }}
            enableGridX={false}
            enableGridY={false}
            pointSize={8}
            pointColor={themeColors.cardBg}
            pointBorderWidth={2}
            pointBorderColor={themeColors.primaryColor}
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
                {
                    anchor: "bottom-right",
                    direction: "column",
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: "left-to-right",
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: "circle",
                    symbolBorderColor: themeColors.bodyColor,
                    itemTextColor: themeColors.bodyColor,
                    effects: [
                        {
                            on: "hover",
                            style: {
                                itemBackground: themeColors.cardBg,
                                itemOpacity: 1,
                            },
                        },
                    ],
                },
            ]}
            enableArea={true} // Enable the area under the line
            areaOpacity={0.3} // Adjust the opacity of the area
            defs={[
                {
                    id: 'gradientArea',
                    type: 'linearGradient',
                    colors: [
                        { offset: 0, color: themeColors.primaryColor, opacity: 0.7 },
                        { offset: 100, color: 'transparent' },
                    ],
                },
            ]}
            fill={[
                { match: { id: 'Emissions' }, id: 'gradientArea' },
            ]}

        />
    );
};

const PieChart = () => {
    const data = [
        {
            id: "100% Quality",
            label: "100% Quality",
            value: 60,
            color: "#1aa385",
        },
        {
            id: "99-75% Quality",
            label: "99-75% Quality",
            value: 30,
            color: "#e6a700",
        },
        {
            id: "<75% Quality",
            label: "<75% Quality",
            value: 10,
            color: "#d14b69",
        },
    ];

    return (
        <ResponsivePie
            data={data}
            theme={{
                axis: {
                    domain: {
                        line: {
                            stroke: themeColors.bodyColor,
                        },
                    },
                    legend: {
                        text: {
                            fill: themeColors.bodyColor,
                        },
                    },
                    ticks: {
                        line: {
                            stroke: themeColors.bodyColor,
                            strokeWidth: 1,
                        },
                        text: {
                            fill: themeColors.bodyColor,
                        },
                    },
                },
                legends: {
                    text: {
                        fill: themeColors.bodyColor,
                    },
                },
                tooltip: {
                    container: {
                        background: themeColors.cardBg,
                        color: themeColors.textColor,
                    },
                },
            }}
            colors={{ datum: "data.color" }}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            borderColor={{
                from: "color",
                modifiers: [["darker", 0.2]],
            }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor={themeColors.bodyColor}
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: "color" }}
            enableArcLabels={false}
            legends={[
                {
                    anchor: "bottom",
                    direction: "row",
                    justify: false,
                    translateX: 0,
                    translateY: 56,
                    itemsSpacing: 0,
                    itemWidth: 120,
                    itemHeight: 18,
                    itemTextColor: themeColors.bodyColor,
                    itemDirection: "left-to-right",
                    itemOpacity: 1,
                    symbolSize: 18,
                    symbolShape: "circle",
                    effects: [
                        {
                            on: "hover",
                            style: {
                                itemTextColor: themeColors.bodyColor,
                            },
                        },
                    ],
                },
            ]}
        />
    );
};


const Ideas = () => {
    return (
        <div className="user-box fourth-box">
            <div className="chart-wrapper">
                <Box m="20px">
                    <Box className="card" height="75vh">
                        <LineChart />
                    </Box>
                </Box>
            </div>

            <div className="chart-wrapper">
                <Box m="20px">
                    <Box className="card" height="75vh">
                        <PieChart />
                    </Box>
                </Box>
            </div>
        </div>
    );
};

export default Ideas;