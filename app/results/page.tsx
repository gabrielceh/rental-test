import { registerVehiclesContainer } from '@/core/di/vehicles.container';
import { BackHeader } from '@/modules/shared/ui';
import { ResultsContainer } from '@/modules/vehicles/presentation/containers';

export default async function ResultsPage() {
  const { getVehiclesUseCase } = registerVehiclesContainer();

  const vehicles = await getVehiclesUseCase.execute();

  return (
    <main className='flex flex-col gap-8'>
      <BackHeader
        title='Resultados'
        path={'/'}
        ariaLabel='Volver a la página principal'
      />

      <ResultsContainer vehicles={vehicles} />
    </main>
  );
}
