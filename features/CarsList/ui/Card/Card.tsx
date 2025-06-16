import { Car } from '@/features/CarsList/types';
import Image from 'next/image';
import { FC } from 'react';

type Props = { car: Car };

export const Card: FC<Props> = ({
  car: { images, mark_id, price, folder_id },
}) => {
  return (
    <article className='h-80 w-60 py-4 px-6 flex flex-col bg-blue-200 rounded-2xl text-center'>
      <Image
        className='m-auto h40 rounded-xl'
        src={images.image[0]}
        alt={mark_id + folder_id}
        width={200}
        height={200}
        loading='eager'
        priority
      />
      <h4 className='h-16 text-lg'>
        {mark_id} {folder_id}
      </h4>
      <p>
        Стоимость - <span className='text-green-700'>{price}</span>
      </p>
    </article>
  );
};
