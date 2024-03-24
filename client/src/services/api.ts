import axios from 'axios';
import { SensorData } from '../types/sensordata';

const baseUrl = 'http://localhost:3000';

class ApiService {
    async getSensorData(): Promise<SensorData[]> {
        try {
            const response = await axios.get<SensorData[]>(`${baseUrl}/sensors/data`);
            return response.data;
        } catch (error) {
            console.error('Error fetching sensor data:', error);
            throw error;
        }
    }

    async addSensorData(data: SensorData): Promise<void> {
        try {
            await axios.post(`${baseUrl}/sensors/data`, data);
        } catch (error) {
            console.error('Error adding sensor data:', error);
            throw error;
        }
    }
}

export default ApiService;
