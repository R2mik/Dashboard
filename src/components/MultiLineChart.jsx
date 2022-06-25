import React from 'react'
import {Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend} from 'chart.js'
import {Line} from 'react-chartjs-2'

import useAxiosFetch from '../hooks/useAxiosFetch'
import { POPULATION } from '../utils/utils'
import {optionsMultiLine} from './Options'

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
    )
    
    export const MultiLineChart = () => {
        const {data, isLoading} = useAxiosFetch(POPULATION)
        const usaObj = Object.values(data).filter(cc => cc["Country Code"] === "USA"); //filtered objects by country code
        const usaValue = usaObj.map(v => v.Value);

        const euObj = Object.values(data).filter(cc => cc["Country Code"] === "EUU"); //filtered objects by country code
        const euValue = euObj.map(v => v.Value);

        const arbObj = Object.values(data).filter(cc => cc["Country Code"] === "ARB"); //filtered objects by country code
        const arbValue = arbObj.map(v => v.Value);

        const years = usaObj.map(y => y.Year);

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
                                label: 'Population of USA',
                                data: usaValue,
                                borderWidth: 2,
                                backgroundColor: 'rgb(245, 215, 95, 96)',
                                borderColor: 'rgb(245, 215, 95, 96)',
                                tension: 0.3,
                                yAxisId: 'y',
                                },

                                {
                                label: 'Population of EU',
                                data: euValue,
                                borderWidth: 2,
                                backgroundColor: 'rgb(120, 245, 230, 96)',
                                borderColor: 'rgb(120, 245, 230, 96)',
                                tension: 0.3,
                                yAxisId: 'y1',
                                },

                                {
                                label: 'Population of Arab World',
                                data: arbValue,
                                borderWidth: 2,
                                backgroundColor: 'rgb(245, 144, 239, 96)',
                                borderColor: 'rgb(245, 144, 239, 96)',
                                tension: 0.3,
                                yAxisId: 'y2',
                                }
                            ]
                        }
                    }
                    height={400}
                    width={600}
                    options={optionsMultiLine}/>}
            </div>
        )
    }