(function ($) {
    'use strict';
    
    // Visitor's Charts
    var options = {
        chart: {
            type: 'line',
            height: 225,
        },
        stroke: {
            curve: 'smooth',
        },
        title: {
            text: 'Visitors',
            align: 'left'
        },
        series: [{
            name: 'Visitors',
            data: [2486, 2145, 2345, 2895, 3128, 2875, 3296]
        }],
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                gradientToColors: ['#FDD835'],
                shadeIntensity: 1,
                type: 'horizontal',
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100, 100, 100]
            },
        },
        xaxis: {
            name: 'Date',
            categories: [1, 2, 3, 4, 5, 6, 7]
        }
    }

    var chart = new ApexCharts(document.querySelector("#visitors-chart"), options);
    chart.render();

    // Traffice Source
    var options = {
        series: [{
            name: 'Website',
            data: [318, 404, 287, 512, 429, 609, 241]
        }, {
            name: 'Social Media',
            data: [79, 124, 240, 198, 175, 224, 195]
        }],
        chart: {
            height: 225,
            type: 'area'
        },
        title: {
            text: 'Traffic Source',
            align: 'left'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            type: 'datetime',
            categories: ["2020-09-19T00:00:00.000Z", "2020-09-19T01:30:00.000Z", "2020-09-19T02:30:00.000Z", "2020-09-19T03:30:00.000Z", "2020-09-19T04:30:00.000Z", "2020-09-19T05:30:00.000Z", "2020-09-19T06:30:00.000Z"]
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            },
        },
    };

    var chart2 = new ApexCharts(document.querySelector("#trafficeSource"), options);
    chart2.render();

})(jQuery);