import SearchForm from '@/modules/vehicles/presentation/components/SearchForm';

export default function HomePage() {
  return (
    <main className='w-full max-w-87.5 md:max-w-2xl mx-auto'>
      <h1>Buscar Vehículos</h1>

      <SearchForm />
    </main>
  );
}
