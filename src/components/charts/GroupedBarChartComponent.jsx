import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { useTheme } from '@mui/material';
import { tokens } from '../../theme/theme';
import styles from './GroupedBarChart.module.css';

const GroupedBarChart = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const data = [
        { category: 'HR Management', 2021: 100, 2022: 130 },
        { category: 'CRM', 2021: 80, 2022: 100 },
        { category: 'Websites', 2021: 200, 2022: 250 },
    ];

    const CustomCategoryLayer = ({ bars, xScale }) => {
        return bars.map((bar, index) => {
            if (index % 2 === 0) {
                // Ensures the category name is placed once per grouped bar
                const categoryName = data[index / 2]?.category;
                const xPosition = xScale(categoryName) + xScale.bandwidth() / 2;
                return (
                    <text
                        key={categoryName}
                        x={xPosition}
                        y={-10} // Adjust this to position text above the bars
                        textAnchor="middle"
                        style={{
                            fill: '#fff',
                            fontSize: 12,
                            fontWeight: 'bold',
                        }}
                    >
                        {categoryName}
                    </text>
                );
            }
            return null;
        });
    };

    return (
        <div className={styles.chartContainer}>
            <div className={styles.heading}>
                <h2 className={styles.headingText}>Weak(Apps & Software)</h2>
            </div>
            <div className={styles.chartContent}>
                <ResponsiveBar
                    data={data}
                    keys={['2021', '2022']}
                    indexBy="category"
                    margin={{ top: 60, right: 80, bottom: 80, left: 80 }}
                    padding={0.3}
                    groupMode="grouped"
                    theme={{
                        axis: {
                            domain: {
                                line: {
                                    stroke: colors.grey[100],
                                },
                            },
                            ticks: {
                                line: {
                                    stroke: colors.grey[100],
                                    strokeWidth: 1,
                                },
                            },
                        },
                        grid: {
                            line: {
                                stroke: '#ddd',
                                strokeDasharray: '4 4',
                            },
                        },
                    }}
                    axisBottom={{
                        tickSize: 0,
                        tickPadding: 0,
                        tickValues: [], // Removes tick labels on the X-axis
                        legend: 'Category',
                        legendPosition: 'middle',
                        legendOffset: 32,
                    }}
                    axisLeft={{
                        tickSize: 0,
                        tickPadding: 0,
                        legend: 'Usage',
                        legendPosition: 'middle',
                        legendOffset: -50,
                    }}
                    colors={({ id }) =>
                        id === '2021' ? '#ff0000' : '#00ff00'
                    } // Red for 2021 and Green for 2022
                    enableLabel={true} // Enable labels
                    labelTextColor="#fff" // Label text color (white)
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    layers={[
                        'grid',
                        'axes',
                        'bars',
                        CustomCategoryLayer, // Add the custom layer for category names
                        'legends',
                    ]}
                />
            </div>
        </div>
    );
};

export default GroupedBarChart;
