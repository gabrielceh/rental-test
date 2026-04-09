import { Vehicle } from '@/modules/vehicles/domain/entities';

export interface VehiclesRepository {
  getVehicles(): Promise<Vehicle[]>;
}