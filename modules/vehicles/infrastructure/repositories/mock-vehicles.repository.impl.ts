import { VehiclesRepository } from '@/modules/vehicles/domain/repository';
import { Vehicle } from '@/modules/vehicles/domain/entities';
import { vehiclesMockData } from '@/modules/vehicles/infrastructure/data/vehicles.mock';

export class MockVehiclesRepositoryImpl implements VehiclesRepository {
  async getVehicles(): Promise<Vehicle[]> {
    // Simulamos api con delay de 1s
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(vehiclesMockData);
      }, 1000);
    });
  }
}