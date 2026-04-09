import { createAsyncThunk } from '@reduxjs/toolkit';

import { registerVehiclesContainer } from '@/core/di/vehicles.container';
import { Vehicle } from '@/modules/vehicles/domain/entities';

export const fetchVehicles = createAsyncThunk<Vehicle[]>(
  'vehicles/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const { getVehiclesUseCase } = registerVehiclesContainer();

      return await getVehiclesUseCase.execute();
    } catch {
      return rejectWithValue('Error fetching vehicles');
    }
  }
);