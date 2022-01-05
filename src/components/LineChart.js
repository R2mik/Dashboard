import React from 'react'
import {Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend} from 'chart.js'
import {Line} from 'react-chartjs-2'
import useAxiosFetch from '../hooks/useAxiosFetch'

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
    )
    
    export const LineChart = () => {
        const {data} = useAxiosFetch('https://pkgstore.datahub.io/core/population/population_json/data/315178266aa86b71057e993f98faf886/population_json.json')
        const obj = Object.values(data).filter(cc => cc["Country Code"] === "ARB"); //filtered objects by country code
        const years = obj.map(y => y.Year);
        const value = obj.map(x => x.Value);
        return (
            <div>
                    <Line
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
                        plugins:{
                            title:{
                                display:true,
                                text: 'Population of the Country',
                                font:{
                                    size:20,
                                }
                            },
                        },
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