'use client';

import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@/core/store/hooks';
import { fetchVehicles } from '@/modules/vehicles/presentation/stores/vehicles.thunk';
import { Loader } from '@/modules/shared/ui';

export function ResultsContainer() {
  const dispatch = useAppDispatch();
  const { vehicles, loading, error } = useAppSelector(
    (state) => state.vehicles,
  );

  useEffect(() => {
    dispatch(fetchVehicles());
  }, []);

  if (loading) {
    return (
      <div className='min-h-[50dvh] w-full flex justify-center items-center'>
        <Loader />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <div>{JSON.stringify(vehicles, null, 2)}</div>;
}
