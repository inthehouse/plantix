export interface SensorData {
    id?: number;
    type: string;
    plant_type: string;
    temperature: number;
    humidity: number;
    timestamp?: string;
}