export const optionsMultiLine = {
    maintainAspectRatio: false,
    plugins:{
        title:{
            display:true,
            text: 'Population of the countries',
            font:{
                size:20,
            }
        },
    },
    scales: {
        y:{
            title:{
                display: true,
                text: 'Number of citizens',
                font:{
                    size: 20,
                }
            }
        },
        x:{
            title:{
                display: true,
                text: 'Year',
                align: 'end',
                font:{
                    size: 20,
                }
            }
        }
    }
}