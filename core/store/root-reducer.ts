import { vehiclesReducer } from '@/modules/vehicles/presentation/stores/vehicles.slice';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  vehicles: vehiclesReducer,
});