const request = require('supertest')
import app from '../../index';

describe('POST /api/sensors/data', () => {
    test('should add sensor data and return 201 status code with success message', async () => {
        const newData = {
            type: 'temperature',
            plant_type: 'rose',
            temperature: 25,
            humidity: 60,
        };

        const response = await request(app)
            .post('/api/sensors/data')
            .send(newData);

        expect(response.status).toBe(201);
        expect(response.body.message).toBe('Sensor data received and stored successfully');
    });

    test('should return 500 status code with error message if sensor data is invalid', async () => {
        const invalidData = {
            type: 'temperature',
            plant_type: 'rose',
        };

        const response = await request(app)
            .post('/api/sensors/data')
            .send(invalidData);

        expect(response.status).toBe(500);
        expect(response.body.error).toBe('Failed to add sensor data');
    });
});

describe('GET /api/sensors/data', () => {
    test('should return 200 status code with latest sensor data', async () => {
        const response = await request(app).get('/api/sensors/data');
        expect(response.status).toBe(200);
    });

    test('should return 500 status code if there is an error fetching sensor data', async () => {
        jest.mock('../controllers/sensorcontroller', () => ({
            ...jest.requireActual('../controllers/sensorcontroller'),
            readSensorDataFromFile: jest.fn(() => {
                throw new Error('Failed to read sensor data from file');
            }),
        }));

        const response = await request(app).get('/api/sensors/data');
        expect(response.status).toBe(500);
        expect(response.body.error).toBe('Failed to get latest sensor data');
    });
});
