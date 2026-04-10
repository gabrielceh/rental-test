import { Title } from '@/modules/shared/ui';
import SearchForm from '@/modules/vehicles/presentation/components/SearchForm';

export default function HomePage() {
  return (
    <main className='w-full max-w-87.5 md:max-w-2xl mx-auto flex flex-col gap-8'>
      <header className='flex flex-col gap-4'>
        <Title as='h1' size='3xl' className='text-center'>
          Alquila tu vehículo
        </Title>

        <Title as='h2' size='sm' color='light' className='text-center'>
          Encuentra el auto perfecto para tu próximo viaje
        </Title>
      </header>

      <SearchForm />
    </main>
  );
}
