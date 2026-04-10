import { Title } from '@/modules/shared/ui';


export default function NotFound() {
  return (
    <div className='h-[50dvh] w-full flex flex-col items-center justify-center'>
      <Title as='h1' size='3xl' className='text-center'>404</Title>
      <Title as='h2' size='xl' color='light' className='text-center'>Resultado no encontrado</Title>
    </div>
  )
}
