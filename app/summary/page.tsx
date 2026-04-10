'use client';
import { useEffect } from 'react';

import { useAppSelector } from '@/core/store/hooks';
import { BackHeader } from '@/modules/shared/ui';
import { useRouter } from 'next/navigation';
import { BookingSummary } from '@/modules/vehicles/presentation/components';

export default function SummaryPage() {
  const router = useRouter();

  const { selectedVehicle, startDate, endDate, city } = useAppSelector(
    (state) => state.vehicles,
  );

  useEffect(() => {
    const missingData = !selectedVehicle || !startDate || !endDate || !city;

    if (missingData) {
      router.replace('/'); // o '/search'
    }
  }, [selectedVehicle, startDate, endDate, city, router]);

  if (!selectedVehicle) return null;

  return (
    <main className='flex flex-col gap-8 w-full max-w-lg mx-auto'>
      <BackHeader
        title='Resumen de reserva'
        path={'/results'}
        ariaLabel='Volver a la página de resultados'
      />

      <BookingSummary
        dropOff={endDate}
        location={city}
        pickUp={startDate}
        vehicle={selectedVehicle}
      />
    </main>
  );
}
