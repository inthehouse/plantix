import React, { useState, useEffect } from 'react';
import SensorList from './SensorList';
import { useApiService } from '../../context/ApiServiceContext';
import { SensorData } from '../../types/sensordata';

import '../../styles/dashboard.css';

const Dashboard: React.FC = () => {
    const apiService = useApiService();
    const [sensorData, setSensorData] = useState<SensorData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await apiService.getSensorData();
                setSensorData(data);
            } catch (error) {
                console.error('Error fetching sensor data:', error);
            }
        };

        fetchData();
        const intervalId = setInterval(fetchData, 60000);

        return () => clearInterval(intervalId);
    }, [apiService]);

    return (
        <div>
            <h1>Dashboard</h1>
            <SensorList sensorData={sensorData} />
        </div>
    );
};

export default Dashboard;
