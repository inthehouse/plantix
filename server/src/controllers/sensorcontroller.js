import fs from 'fs';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dataFilePath = join(__dirname, '../../data/sensordata.json');

export const readSensorDataFromFile = () => {
    try {
        const data = fs.readFileSync(dataFilePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading sensor data from file:', error.message);
        throw new Error('Failed to read sensor data from file');
    }
};

export const writeSensorDataToFile = (data) => {
    try {
        fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
    } catch (error) {
        console.error('Error writing sensor data to file:', error.message);
        throw new Error('Failed to write sensor data to file');
    }
};

// this is only done because i decided to use a simple json file for the data. so i need the last id
export const generateNewId = (sensorData) => {
    return sensorData.length === 0 ? 1 : sensorData[sensorData.length - 1].id + 1;
};

export const addSensorData = (newData) => {
    if (!newData || !newData.type || !newData.plant_type || newData.temperature === undefined || newData.humidity === undefined) {
        throw new Error('Invalid sensor data. All fields are required.');
    }

    const timestamp = new Date().toISOString();
    const sensorData = readSensorDataFromFile();
    const newId = generateNewId(sensorData);
    sensorData.push({ ...newData, id: newId, timestamp });
    writeSensorDataToFile(sensorData);
};

export const getLatestSensorData = () => {
    return readSensorDataFromFile();
};
