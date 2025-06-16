export type Sorter = ' ' | 'asc' | 'desc';

export type Car = {
  unique_id: number;
  mark_id: string;
  folder_id: string;
  price: number;
  images: {
    image: Array<string>;
  };
};

export type CarsResponse = {
  data: Array<Car>;
  meta: {
    count: number;
    page: number;
    total: number;
  };
};
