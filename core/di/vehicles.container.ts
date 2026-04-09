import { GetVehiclesUseCase } from '@/modules/vehicles/application/usecases';
import { MockVehiclesRepositoryImpl } from '@/modules/vehicles/infrastructure/repositories';

// registramos las dependecias de nuestro modulo Vehicles
export const registerVehiclesContainer = () => {
  const repository = new MockVehiclesRepositoryImpl();

  return {
    getVehiclesUseCase: new GetVehiclesUseCase(repository),
  };
};