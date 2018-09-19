function initialize(){
    
let myChart = document.getElementById('mychart').getContext('2d');

let massPopChart = new Chart(myChart, {
    type:'bar',
    data:{
        labels:['Karachi', 'Lahore', 'Faisalabad', 'Rawalpindi', 'Peshawar','Hyderabad', 'Islamabad'],
        datasets:[{
            label: 'Population',
            data:[
                14916456,
                11126285,
                3204726,
                2098231,
                2027001,
                1734309,
                1009832
            ],
            backgroundColor:[
                'rgba(255, 99, 135, 0.6)',
                'rgba(55, 156, 274, 0.6)',
                'rgba(255, 220, 55, 0.6)',
                'rgba(105, 70, 255, 0.6)',
                'rgba(55, 190, 60, 0.6)',
                'rgba(255, 20, 40, 0.6)',
                'rgba(40, 255, 20, 0.6)'
            ]

        }]

    },
    option:{}
});
}