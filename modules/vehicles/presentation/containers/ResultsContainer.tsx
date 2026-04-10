'use client';

import { useRouter } from 'next/navigation';

import { useAppDispatch } from '@/core/store/hooks';
import { Vehicle } from '@/modules/vehicles/domain/entities';
import { VehicleCard } from '@/modules/vehicles/presentation/components';
import { setSelectedVehicle } from '@/modules/vehicles/presentation/stores/vehicles.slice';

interface ResultsContainerProps {
  vehicles: Vehicle[];
}

export function ResultsContainer({ vehicles }: ResultsContainerProps) {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleSelect = (vehicle: Vehicle) => {
    dispatch(setSelectedVehicle(vehicle));
    router.push('/summary');
  };

  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      {vehicles.map((vehicle) => (
        <VehicleCard
          key={vehicle.id}
          vehicle={vehicle}
          onSelect={handleSelect}
        />
      ))}
    </section>
  );
}
