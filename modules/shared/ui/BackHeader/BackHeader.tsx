'use client';

import { ChevronLeft } from 'lucide-react';
import { IconButton } from '../IconButton/IconButton';
import { Title } from '../Title/Title';
import { redirect } from 'next/navigation';

interface BackHeaderProps {
  title: string;
  path: string;
  ariaLabel: string;
}

export function BackHeader({ title, path, ariaLabel }: BackHeaderProps) {
  return (
    <header className='flex gap-2 items-center'>
      <IconButton
        onClick={() => redirect(path)}
        className='cursor-pointer'
        icon={<ChevronLeft />}
        aria-label={ariaLabel}
      />

      <Title as='h1' size='2xl'>
        {title}
      </Title>
    </header>
  );
}
