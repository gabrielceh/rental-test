'use client';

import { useState } from 'react';

import { Input } from '@/modules/shared/ui';
import { useRouter } from 'next/navigation';
import { Button } from '@/modules/shared/ui/Button/Button';

const initialForm = {
  location: '',
  pickup: '',
  returnDate: '',
};

export default function SearchForm() {
  const [form, setForm] = useState(initialForm);
  const [location, setLocation] = useState('');
  const [pickup, setPickup] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const router = useRouter();

  const onSearch = () => {
    console.log('Searching for vehicles...');
    console.log('Location:', location);
    console.log('Pickup:', pickup);
    console.log('Return date:', returnDate);

    router.push('/results');
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch();
      }}
      className='flex flex-col gap-4'
    >
      <Input
        label='Ciudad o Aeropuerto'
        id='location'
        value={form.location}
        onChange={(e) => setForm({ ...form, location: e.target.value })}
        placeholder='Ej: Barranquilla'
      />
      <section className='grid grid-cols-2 gap-4'>
        <Input
          label='Recogida'
          id='pickup'
          type='date'
          value={form.pickup}
          onChange={(e) => setForm({ ...form, pickup: e.target.value })}
          placeholder='Fecha'
        />

        <Input
          label='Devolución'
          id='returnDate'
          type='date'
          value={form.returnDate}
          onChange={(e) => setForm({ ...form, returnDate: e.target.value })}
          placeholder='Fecha'
        />
      </section>

      <Button type='submit'>Buscar</Button>
    </form>
  );
}