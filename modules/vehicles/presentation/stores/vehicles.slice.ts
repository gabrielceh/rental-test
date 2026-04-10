import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Vehicle } from '@/modules/vehicles/domain/entities';

interface ReservationState {
  city: string;
  startDate: string;
  endDate: string;
  selectedVehicle: Vehicle | null;
}

const initialState: ReservationState = {
  city: '',
  startDate: '',
  endDate: '',
  selectedVehicle: null,
};

const vehiclesSlice = createSlice({
  name: 'vehicles',
  initialState,
  reducers: {
    setSearchData: (state, action) => {
      state.city = action.payload.city;
      state.startDate = action.payload.startDate;
      state.endDate = action.payload.endDate;
    },

    setSelectedVehicle: (state, action: PayloadAction<Vehicle>) => {
      state.selectedVehicle = action.payload;
    },
  },
});

export const vehiclesReducer = vehiclesSlice.reducer;
export const { setSearchData, setSelectedVehicle } = vehiclesSlice.actions;


