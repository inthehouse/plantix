import { Router } from 'express';
import { addSensorData, getLatestSensorData } from '../controllers/sensorcontroller.js';

const router = Router();

router.post('/sensors/data', (req, res) => {
    try {
        const newData = req.body;
        addSensorData(newData);
        res.status(201).json({ message: 'Sensor data received and stored successfully' });
    } catch (error) {
        console.error('Error adding sensor data:', error);
        res.status(500).json({ error: 'Failed to add sensor data' });
    }
});

router.get('/sensors/data', (req, res) => {
    try {
        const latestData = getLatestSensorData();
        res.status(200).json(latestData);
    } catch (error) {
        console.error('Error getting latest sensor data:', error);
        res.status(500).json({ error: 'Failed to get latest sensor data' });
    }
});

export default router;
