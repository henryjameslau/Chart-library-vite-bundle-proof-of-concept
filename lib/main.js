import Highcharts from "highcharts";
import {wideToTidy, transformToSeriesFormat,DateParser } from "./utils.js"


export function hello() {
    console.log('Hello from main!');
}

export function createChart(container, data, config = {}) {
    // Default configuration
    const defaultConfig = {
        source: "Source: UN",
        xAxisLabel: "Population (millions)",
        valueSuffix: " million",
        yKey: "name",
        xKey: "value",
        zKey: "category",
        barHeight: 30,
        colors: ["#206095", "#27A0CC", "#871A5B", "#A8BD3A", "#F66068"]
    };

    // Merge provided config with defaults
    config = { ...defaultConfig, ...config };
    console.log(config)
    // Convert data to tidy format
    const tidyData = wideToTidy(data,config.dataFormat);

    // Get categories (unique names)
    const categories = Array.from(new Set(tidyData.map(d => d[config.yKey])));

    // Create series data
    const series = (() => {
        const index = {};
        for (const d of tidyData) {
            if (!index[d[config.zKey]]) {
                index[d[config.zKey]] = {
                    name: d[config.zKey],
                    data: []
                };
            }
            index[d[config.zKey]].data.push(d[config.xKey]);
        }
        return Object.values(index);
    })();

    // Calculate height based on number of categories
    const height = categories.length * (config.barHeight + 10) + 60;

    // Create chart
    const chart = Highcharts.chart(container, {
        chart: {
            type: 'bar',
            height: height
        },
        title: {
            text: config.title || ""
        },
        subtitle: {
            text: config.subtitle || ""
        },
        colors: config.colors,
        xAxis: {
            categories: categories,
            title: false,
            lineWidth: 0
        },
        yAxis: {
            min: 0,
            reversedStacks: false,
            title: {
                text: config.xAxisLabel,
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            },
            gridLineWidth: 1
        },
        tooltip: {
            valueSuffix: config.valueSuffix,
            enabled: false
        },
        plotOptions: {
            series: {
                animation: false,
                stacking: 'normal',
                pointWidth: config.barHeight,
                borderRadius: 0,
                borderWidth: 0,
                groupPadding: 0,
                dataLabels: {
                    enabled: false,
                    inside: true,
                    allowOverlap: true,
                    align: 'right',
                    style: { textOutline: 'none' },
                    formatter: function() {
                        const height = this.point.shapeArgs.height;
                        return height > 30 ? this.y.toLocaleString("en-GB") : null;
                    }
                },
                enableMouseTracking: false
            }
        },
        legend: false,
        credits: {
            enabled: false
        },
        series: series
    });

    // Create legend if there's more than one series
    if (series.length > 1) {
        const legendContainer = document.createElement('ul');
        legendContainer.className = 'chart-legend';
        
        series.forEach((ser, i) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span class="chart-bullet" style="background: ${config.colors[i]}"></span>
                ${ser.name}
            `;
            legendContainer.appendChild(li);
        });

        // Insert legend before chart
        container.parentNode.insertBefore(legendContainer, container);
    }

    // Add source if provided
    if (config.source) {
        const sourceElement = document.createElement('p');
        sourceElement.className = 'chart-source';
        sourceElement.textContent = config.source;
        container.parentNode.appendChild(sourceElement);
    }

    return chart;
}

// CSS styles to be added to the page
const styles = `
.chart-legend {
    margin: 0;
    padding: 0;
    list-style: none;
}
.chart-legend > li {
    display: inline-block;
    margin: 0 18px 0 0;
}
.chart-bullet {
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-right: 5px;
}
.chart-source {
    font-size: 0.9em;
    color: #666;
    margin-top: 10px;
}
`;

// Add styles to the page
const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);
