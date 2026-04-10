
import { ArrowLeft, CalendarDays, MapPin, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { Vehicle } from '@/modules/vehicles/domain/entities';
import { getDaysDifference } from '@/modules/shared/utils/get-days-difference.utils';
import { Button } from '@/modules/shared/ui';
import { formatDateEsShort } from '@/modules/shared/utils/format-date-es-shor.utils';
import { useMemo } from 'react';

interface BookingSummaryProps {
  vehicle: Vehicle;
  location: string;
  pickUp: string;
  dropOff: string;
}

export function BookingSummary({
  vehicle,
  location,
  pickUp,
  dropOff,
}: BookingSummaryProps) {
  const days = useMemo(
    () => getDaysDifference(pickUp, dropOff),
    [pickUp, dropOff],
  );
  const total = days * vehicle.price;

  const handleContinue = () => {
    toast.success('¡Reserva confirmada!', {
      description: `${vehicle.brand} ${vehicle.name} por ${days} día(s) — $${total}`,
    });
  };

  return (
    <div className='w-full max-w-lg mx-auto space-y-6'>
      <div className='rounded-xl border border-gray-300 bg-white shadow-card overflow-hidden'>
        <div className='aspect-video overflow-hidden bg-white'>
          <img
            src={vehicle.imageUrl}
            alt={`${vehicle.brand} ${vehicle.name}`}
            className='w-full h-full object-cover'
            width={640}
            height={512}
          />
        </div>
        <div className='p-6 space-y-5'>
          <div>
            <span className='text-xs font-medium text-muted-foreground uppercase tracking-wider'>
              {vehicle.brand}
            </span>
            <h3 className='font-heading text-xl font-bold text-foreground mt-1'>
              {vehicle.name}
            </h3>
          </div>

          <div className='space-y-3 text-sm'>
            <div className='flex items-center gap-2 text-muted-foreground'>
              <MapPin className='w-4 h-4' />
              <span>{location}</span>
            </div>
            <div className='flex items-center gap-2 text-muted-foreground'>
              <CalendarDays className='w-4 h-4' />
              <span>
                {formatDateEsShort(pickUp)} — {formatDateEsShort(dropOff)}
              </span>
            </div>
          </div>

          <div className='border-t border-gray-300 pt-4 space-y-2'>
            <div className='flex justify-between text-sm text-muted-foreground'>
              <span>
                ${vehicle.price} × {days} día(s)
              </span>
              <span>${total}</span>
            </div>
            <div className='flex justify-between text-lg font-heading font-bold text-foreground'>
              <span>Total</span>
              <span>${total}</span>
            </div>
          </div>
        </div>
      </div>

      <Button
        onClick={handleContinue}
        className='w-full flex items-center justify-center gap-2'
      >
        <CheckCircle2 className='w-4 h-4' />
        Continuar
      </Button>
    </div>
  );
};

