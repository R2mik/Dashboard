import React from 'react'

import {Chart as ChartJS, BarElement, CategoryScale, LinearScale} from 'chart.js'
import {Bar} from 'react-chartjs-2'

import useAxiosFetch from '../hooks/useAxiosFetch'


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement
)

export const BarChart = () => {
    const {data} = useAxiosFetch('https://pkgstore.datahub.io/core/population/population_json/data/315178266aa86b71057e993f98faf886/population_json.json')
    const obj = Object.values(data).filter(cc => cc["Country Code"] === "ARB"); //filtered objects by country code
    const years = obj.map(y => y.Year);
    const value = obj.map(x => x.Value);
    return (
        <div>
                <Bar
                data = {
                    {
                        labels: years,
                        datasets: [
                            {
                            label: 'Population',
                            data: value,
                            borderWidth: 2,
                            backgroundColor: 'rgb(75, 192, 192)',
                            borderColor: 'rgb(75, 192, 192)',
                            tension: 0.3
                            }
                        ]
                    }
                }
                height={400}
                width={600}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        y:{
                                title:{
                                    display: true,
                                    text: 'Number of citizens'
                            }
                        },
                        x:{
                            title:{
                                display: true,
                                text: 'Year',
                                align: 'end',
                        }
                    }
                }}}

                />
        </div>
    )
}