import React, { useState } from 'react';
import SensorForm from './SensorForm';
import { useApiService } from '../../context/ApiServiceContext';
import Alert from '../Alert';
import { SensorData } from '../../types/sensordata';

import '../../styles/sensorform.css';

const Sensor: React.FC = () => {
    const apiService = useApiService();

    const [alertType, setAlertType] = useState<'success' | 'error' | null>(null);
    const [showAlert, setShowAlert] = useState(false);

    const [sensorData, setSensorData] = useState<SensorData>({
        type: '',
        plant_type: '',
        temperature: 0,
        humidity: 0,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSensorData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (formData: SensorData) => {
        try {
            await apiService.addSensorData(formData);

            setAlertType('success');
            setShowAlert(true);

            setSensorData({
                type: '',
                plant_type: '',
                temperature: 0,
                humidity: 0,
            });
        } catch (error) {
            setAlertType('error');
            setShowAlert(true);
        }
    };

    const handleAlertClose = () => {
        setShowAlert(false);
        setAlertType(null);
    };

    return (
        <div>
            <h1>New Sensor Info</h1>
            {showAlert && (
                <Alert
                    type={alertType || 'success'}
                    message={alertType === 'error' ? 'Failed to add sensor data' : 'Sensor data added successfully!'}
                    onClose={handleAlertClose}
                />
            )}
            <SensorForm
                sensorData={sensorData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </div>
    );
};

export default Sensor;
