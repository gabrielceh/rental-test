import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Vehicle } from '@/modules/vehicles/domain/entities';
import { fetchVehicles } from '@/modules/vehicles/presentation/stores/vehicles.thunk';

interface VehiclesState {
  vehicles: Vehicle[];
  selectedVehicle: Vehicle | null;
  loading: boolean;
  error: string | null;
}

const initialState: VehiclesState = {
  vehicles: [],
  selectedVehicle: null,
  loading: false,
  error: null,
};

const vehiclesSlice = createSlice({
  name: 'vehicles',
  initialState,
  reducers: {
    selectVehicle(state, action: PayloadAction<Vehicle>){
      state.selectedVehicle = action.payload;
    }
  },

  extraReducers: (builder) => {
    builder.addCase(fetchVehicles.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchVehicles.fulfilled, (state, action) => {
      state.vehicles = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchVehicles.rejected, (state, action) => {
      state.vehicles = [];
      state.loading = false;
      state.error = action.error.message ?? null;
    });
  },
});

export const vehiclesReducer = vehiclesSlice.reducer;
export const vehiclesActions = vehiclesSlice.actions;


