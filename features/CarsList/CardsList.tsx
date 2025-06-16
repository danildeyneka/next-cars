import { getCars } from '@/features/CarsList/api/cars';
import { sorter } from '@/features/CarsList/lib/sorter';
import { Sorter } from '@/features/CarsList/types';
import { Card } from '@/features/CarsList/ui/Card/Card';
import { Filters } from '@/features/CarsList/ui/Filters/Filters';

export default async function CardsList({
  searchParams,
}: {
  searchParams?: Promise<{ sort: Sorter; page: string }>;
}) {
  const { sort, page } = await searchParams!;

  const cars = await getCars(sort, page);

  return (
    <main className='p-10 m-20'>
      <Filters page={page} sort={sort} totalItems={cars.meta.total} />

      <article className='flex flex-wrap gap-4 justify-around mt-10'>
        {cars.data
          .sort((a, b) => sorter(a, b, sort))
          .map((car) => (
            <Card key={car.unique_id} car={car} />
          ))}
      </article>
    </main>
  );
}
