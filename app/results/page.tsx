import { BackHeader } from '@/modules/shared/ui';
import { ResultsContainer } from '@/modules/vehicles/presentation/containers';
import { redirect } from 'next/navigation';

export default function ResultsPage() {
  const goHome = () => {
    redirect('/');
  };

  return (
    <main className=''>
      <BackHeader title='Resultados' path={'/'} />
      <ResultsContainer />
    </main>
  );
}
