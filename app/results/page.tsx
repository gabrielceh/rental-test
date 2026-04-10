import { BackHeader } from '@/modules/shared/ui';
import { ResultsContainer } from '@/modules/vehicles/presentation/containers';

export default function ResultsPage() {
  return (
    <main className='flex flex-col gap-8'>
      <BackHeader
        title='Resultados'
        path={'/'}
        ariaLabel='Volver a la página principal'
      />
      <ResultsContainer />
    </main>
  );
}
