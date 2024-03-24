import React from 'react';
import { SensorData } from '../../types/sensordata';


interface SensorListProps {
    sensorData: SensorData[];
}

// i could have used moment to simplify but wanted to avoid another external package
const formatTimestamp = (timestamp: string | undefined) => {
    if (!timestamp) return '';
    const date = new Date(timestamp);
    return date.toLocaleString();
};

const SensorList: React.FC<SensorListProps> = ({ sensorData }) => {
    return (
        <div>
            {sensorData.length === 0 && (
                <div className="warning">There is no sensor data.</div>
            )}
            {sensorData.length > 0 && (
                <>
                    <h2>Sensor Data</h2>
                    <table id="sensors">
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>Plant Type</th>
                                <th>Temperature (°C)</th>
                                <th>Humidity (%)</th>
                                <th>Timestamp</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sensorData.map((data, index) => (
                                <tr key={index}>
                                    <td>{data.type}</td>
                                    <td>{data.plant_type}</td>
                                    <td>{data.temperature}&deg;C</td>
                                    <td>{data.humidity}%</td>
                                    <td>{formatTimestamp(data.timestamp)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table></>
            )}
        </div>
    );
};

export default SensorList;
