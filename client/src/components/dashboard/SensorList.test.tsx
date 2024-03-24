import React from 'react';
import { render } from '@testing-library/react';
import SensorList from './SensorList';

const mockSensorData = [
    { type: 'Type 1', plant_type: 'Plant 1', temperature: 25, humidity: 50, timestamp: '2024-03-23T10:00:00' },
    { type: 'Type 2', plant_type: 'Plant 2', temperature: 30, humidity: 60, timestamp: '2024-03-23T11:00:00' }
];

describe('SensorList component', () => {
    it('renders without crashing', () => {
        render(<SensorList sensorData={[]} />);
    });

    it('displays warning when no sensor data is provided', () => {
        const { getByText } = render(<SensorList sensorData={[]} />);
        expect(getByText('There is no sensor data.')).toBeInTheDocument();
    });

    it('displays sensor data table when sensor data is provided', () => {
        const { getByText } = render(<SensorList sensorData={mockSensorData} />);
        expect(getByText('Sensor Data')).toBeInTheDocument();
        expect(getByText('Type 1')).toBeInTheDocument();
        expect(getByText('Plant 1')).toBeInTheDocument();
        expect(getByText('25°C')).toBeInTheDocument();
        expect(getByText('50%')).toBeInTheDocument();
        expect(getByText('23/03/2024, 10:00:00 AM')).toBeInTheDocument(); // Format your timestamp accordingly
    });
});
