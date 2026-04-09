import { VehiclesRepository } from '@/modules/vehicles/domain/repository';
import { Vehicle } from '@/modules/vehicles/domain/entities';

export class MockVehiclesRepositoryImpl  implements VehiclesRepository {

  async getVehicles(): Promise<Vehicle[]> {
    // Simulamos api con delay de 1s
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: '1', name: 'Mercedes GLC 300', price: 700000 },
          { id: '2', name: 'BMW X3', price: 450000 },
          { id: '3', name: 'Toyota Corolla Cross', price: 380000 },
        ])
      }, 1000);
    })
  }
}