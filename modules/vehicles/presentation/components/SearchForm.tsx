'use client';

import { useState } from 'react';

import { useAppDispatch } from '@/core/store/hooks';
import { Input, Button } from '@/modules/shared/ui';
import { useRouter } from 'next/navigation';
import { validateDateRange } from '@/modules/shared/utils/validate-date-range.utils';
import { toast } from 'sonner';
import { setSearchData } from '../stores/vehicles.slice';

const initialForm = {
  location: '',
  pickup: '',
  returnDate: '',
};

export default function SearchForm() {
  const [form, setForm] = useState(initialForm);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const onSearch = () => {
    if (!form.location || !form.pickup || !form.returnDate) {
      toast('Por favor, rellena todos los campos');
      return;
    }

    const validateDates = validateDateRange(form.pickup, form.returnDate);
    if (!validateDates.isValid) {
      toast(validateDates.error);
      return;
    }
    dispatch(
      setSearchData({
        city: form.location,
        startDate: form.pickup,
        endDate: form.returnDate,
      }),
    );

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