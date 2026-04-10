"use client"

import { Vehicle } from '@/modules/vehicles/domain/entities';
import { Button } from '@/modules/shared/ui';

interface VehicleCardProps {
  vehicle: Vehicle;
  onSelect: (vehicle: Vehicle) => void;
}

export function VehicleCard ({ vehicle, onSelect }: VehicleCardProps) {
  return (
    <div className="group rounded-xl border border-gray-300 bg-white shadow-card hover:shadow-elevated transition-shadow duration-300 overflow-hidden">
      <div className="aspect-4/3 overflow-hidden bg-white">
        <img
          src={vehicle.imageUrl}
          alt={vehicle.name}
          loading="lazy"
          width={640}
          height={512}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5 space-y-4">
        <div>
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            {vehicle.brand}
          </span>
          <h3 className="font-heading text-lg font-semibold text-foreground mt-1">
            {vehicle.name}
          </h3>
        </div>
        <div className="flex items-end justify-between pt-4 border-t border-gray-300">
          <div>
            <span className="text-2xl font-heading font-bold text-foreground">
              ${vehicle.price}
            </span>
            <span className="text-sm text-muted-foreground"> /día</span>
          </div>
          <Button onClick={() => onSelect(vehicle)}>
            Seleccionar
          </Button>
        </div>
      </div>
    </div>
  );
};


