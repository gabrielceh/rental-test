import { VehiclesRepository } from '@/modules/vehicles/domain/repository';
import { Vehicle } from '@/modules/vehicles/domain/entities';

export class GetVehiclesUseCase {
  constructor(private vehiclesRepository: VehiclesRepository) {}

  async execute(): Promise<Vehicle[]> {
    return await this.vehiclesRepository.getVehicles();
  }
}