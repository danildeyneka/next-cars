import { CardsList } from '@/features/CarsList';
import { Sorter } from '@/features/CarsList/types';

export default function Home({
  searchParams,
}: {
  searchParams?: Promise<{ sort: Sorter; page: string }>;
}) {
  return (
    <main className='font-[--font-geist-sans]'>
      <CardsList searchParams={searchParams} />
    </main>
  );
}
