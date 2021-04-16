
import React, {useState, useEffect} from 'react';
import {fetchDailyData} from '../../api'


import styles from './Chart.module.css';

const Charts = () => {
    const [dailyData, setDailyData] = useState([])

    useEffect(() => {
       const fetchAPI = async () => {
           setDailyData(await fetchDailyData());
            console.log(dailyData);
       }

       console.log(dailyData)
       fetchAPI();
    });



    return (
        <div className={styles.container}>
            
        </div>
    )
}

export default Charts
