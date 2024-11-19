const production_data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
    { year: 2017, count: 15 },
    { year: 2019, count: 25 },
    { year: 2020, count: 22 },
    { year: 2021, count: 30 },
    { year: 2022, count: 28 },
  ];

var chartProduct = document.getElementById('productionChart');
var Product=  new Chart(chartProduct,{
        type: 'bar',
        data: {
          labels: production_data.map(row => row.year),
          datasets: [
            {
              label: 'Production',
              data: production_data.map(row => row.count),
              backgroundColor: '#b5e0a0',
            }],
        },
        options: {
          plugins: {
              title: {
                display: true,
                text: 'Production',
                color:'white',
                font: {
                    size: '15'
                },
              },
              legend: {
                  display: false,
                  position: 'top',
                  align: 'center',
                  labels: {
                      color:'white',
                      font: {
                          size: '15'
                      },
                  }
              }
           }
         }
      });



/*----Donut Part1 ----*/
const crop_data = {
    labels: [
      'Rice',
      'Wheat',
      'Maize'
    ],
    datasets: [{
      data: [300, 50, 100],
      backgroundColor: [
        '#d3c96d',
        '#9ba65b',
        '#63834a'
      ],
      hoverOffset: 4
    }]
  };


var chartDonut1 = document.getElementById('Donut1');
var Donut1=  new Chart(chartDonut1,{
        type: 'doughnut',
        data: crop_data,
        options: {
          plugins: {
              title: {
                display: true,
                text: 'Top 3 Harvested Crops',
                align:'center',
                color:'white',
                font: {
                    size: '20'
                },
              },
              legend: {
                  display: true,
                  position: 'right',
                  align: 'center',
                  labels: {
                      color:'white',
                      font: {
                          size: '15'
                      },
                  }
              }
           }
         }
      });

/*----Donut Part2 ----*/
const area_data = {
    labels: [
      'Rice',
      'Wheat',
      'Maize'
    ],
    datasets: [{
      data: [100, 600, 50],
      backgroundColor: [
        '#7dc4a1',
        '#4faca1',
        '#0487a2'
      ],
      hoverOffset: 4
    }]
  };


var chartDonut2 = document.getElementById('Donut2');
var Donut2=  new Chart(chartDonut2,{
        type: 'doughnut',
        data: area_data,
        options: {
          plugins: {
              title: {
                display: true,
                text: 'Area Harvested',
                align:'center',
                color:'white',
                font: {
                    size: '20'
                },
              },
              legend: {
                  display: true,
                  position: 'right',
                  align: 'center',
                  labels: {
                      color:'white',
                      font: {
                          size: '15'
                      },
                  }
              }
           }
         }
      });
      