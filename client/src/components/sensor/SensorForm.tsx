import React from 'react';
import { SensorData } from '../../types/sensordata';

interface SensorFormProps {
    sensorData: SensorData;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (formData: SensorData) => Promise<void>;
}

const useSensorForm = (handleSubmit: (sensorData: SensorData) => Promise<void>) => {
    const [sensorData, setSensorData] = React.useState<SensorData>({
        type: '',
        plant_type: '',
        temperature: 0,
        humidity: 0,
    });
    const [errors, setErrors] = React.useState<{ [key: string]: string }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSensorData(prevState => ({
            ...prevState,
            [name]: value
        }));
        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: ''
        }));
    };

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};
        if (!sensorData.type.trim()) {
            newErrors.type = 'Type is required';
        }
        if (!sensorData.plant_type.trim()) {
            newErrors.plant_type = 'Plant Type is required';
        }
        if (sensorData.temperature < -60 || sensorData.temperature > 120) {
            newErrors.temperature = 'Temperature must be between -60 and 120';
        }
        if (sensorData.humidity < 0 || sensorData.humidity > 100) {
            newErrors.humidity = 'Humidity must be between 0 and 100';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isValid = validateForm();
        if (isValid) {
            try {
                await handleSubmit(sensorData);
                setSensorData({
                    type: '',
                    plant_type: '',
                    temperature: 0,
                    humidity: 0,
                });
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        }
    };

    return { sensorData, errors, handleChange, submitForm };
};

const SensorForm: React.FC<SensorFormProps> = ({ handleSubmit }) => {
    const { sensorData, errors, handleChange, submitForm } = useSensorForm(handleSubmit);

    return (
        <div className="form-container">
            <form onSubmit={submitForm}>
                <div className="form-group">
                    <label htmlFor="type">Type:</label>
                    <input type="text" id="type" name="type" value={sensorData.type} onChange={handleChange} />
                    {errors.type && <span className="invalid">{errors.type}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="plant_type">Plant Type:</label>
                    <input type="text" id="plant_type" name="plant_type" value={sensorData.plant_type} onChange={handleChange} />
                    {errors.plant_type && <span className="invalid">{errors.plant_type}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="temperature">Temperature (°C):</label>
                    <input type="number" id="temperature" name="temperature" value={sensorData.temperature} onChange={handleChange} />
                    {errors.temperature && <span className="invalid">{errors.temperature}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="humidity">Humidity (%):</label>
                    <input type="number" id="humidity" name="humidity" value={sensorData.humidity} onChange={handleChange} />
                    {errors.humidity && <span className="invalid">{errors.humidity}</span>}
                </div>
                <button className="button" type="submit">Add Sensor Data</button>
            </form>
        </div>
    );
};

export default SensorForm;
