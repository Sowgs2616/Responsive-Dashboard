import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import styles from './PieChart.module.css';

const PieChart = ({ isDashboard = false }) => {

    // Custom pie data
    const customPieData = [
        {
            id: 'Windows',
            label: 'Windows',
            value: 40,
            color: '#e53935', // Red color for Windows
        },
        {
            id: 'Linux',
            label: 'Linux',
            value: 35,
            color: '#43a047', // Green color for Linux
        },
        {
            id: 'Other OS',
            label: 'Other OS',
            value: 50,
            color: '#ff9800', // Orange color for Other OS
        },
    ];

    return (
        <div className={styles.pieChartContainer}>
            <div className={styles.heading}>
                <h2 className={styles.headingText}>Unpatched Assets since 30 Days</h2>
            </div>

            <div className={styles.chartContainer}>
                <ResponsivePie
                    theme={{
                        axis: {
                            domain: {
                                line: {
                                    stroke: '#ffffff', // Set stroke to white
                                },
                            },
                            legend: {
                                text: {
                                    fill: '#ffffff', // Set legend text color to white
                                },
                            },
                            ticks: {
                                line: {
                                    stroke: '#ffffff', // Set tick line color to white
                                    strokeWidth: 1,
                                },
                                text: {
                                    fill: '#ffffff', // Set tick text color to white
                                },
                            },
                        },
                        legends: {
                            text: {
                                fill: '#ffffff', // Set legend text color to white
                            },
                        },
                        tooltip: {
                            container: {
                                background: '#ffffff', // Set tooltip background to white
                                color: '#000000', // Tooltip text color set to black
                            },
                        },
                    }}
                    data={customPieData} // Use the customPieData here
                    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                    innerRadius={0} // Full pie chart
                    padAngle={0.7}
                    cornerRadius={3}
                    activeOuterRadiusOffset={8}
                    borderWidth={1}
                    borderColor={{
                        from: 'color',
                        modifiers: [['darker', 0.2]],
                    }}
                    arcLinkLabelsSkipAngle={10}
                    arcLinkLabelsThickness={2}
                    arcLinkLabelsColor={{ from: 'color' }}
                    arcLabelsSkipAngle={10}
                    arcLabelsTextColor={{
                        from: 'color',
                        modifiers: [['darker', 2]],
                    }}
                    defs={[
                        {
                            id: 'dots',
                            type: 'patternDots',
                            background: 'inherit',
                            color: 'rgba(255, 255, 255, 0.3)',
                            size: 4,
                            padding: 1,
                            stagger: true,
                        },
                        {
                            id: 'lines',
                            type: 'patternLines',
                            background: 'inherit',
                            color: 'rgba(255, 255, 255, 0.3)',
                            rotation: -45,
                            lineWidth: 6,
                            spacing: 10,
                        },
                    ]}
                    legends={[
                        {
                            anchor: 'bottom',
                            direction: 'row',
                            justify: false,
                            translateX: 0,
                            translateY: 56,
                            itemsSpacing: 0,
                            itemWidth: 100,
                            itemHeight: 18,
                            itemTextColor: '#ffffff', // Set legend text color to white
                            itemDirection: 'left-to-right',
                            itemOpacity: 1,
                            symbolSize: 18,
                            symbolShape: 'circle',
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemTextColor: '#ffffff', // Hover color for legend text
                                    },
                                },
                            ],
                        },
                    ]}
                    arcLinkLabels={{
                        lineWidth: 2,
                        lineColor: '#ffffff', // White arrow
                        linkLength: 30, // Adjust link length
                        textColor: '#ffffff', // White text for labels
                    }}
                    arcLabels={{
                        // Change arc label stroke color to white
                        stroke: '#ffffff', // Stroke color for label text
                        strokeWidth: 1, // Stroke width for label text
                    }}
                    colors={customPieData.map(item => item.color)}
                />
            </div>
        </div>
    );
};

export default PieChart;
