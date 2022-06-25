import React from 'react'
import {Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend} from 'chart.js'
import {Line} from 'react-chartjs-2'
import useAxiosFetch from '../hooks/useAxiosFetch'
import { POPULATION } from '../utils/utils'

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
        const {data, isLoading} = useAxiosFetch(POPULATION)
        const obj = Object.values(data).filter(cc => cc["Country Code"] === "POL"); //filtered objects by country code
        const years = obj.map(y => y.Year);
        const value = obj.map(v => v.Value);
        return (
            <div>
                {isLoading && "Loading . . ."}
                {!isLoading && 
                    <Line
                    data = {
                        {
                            labels: years,
                            datasets: [
                                {
                                label: `Population of Poland` ,
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
                    }}/>}
            </div>
        )
    }