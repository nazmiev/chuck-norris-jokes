export type Jokes = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
}

export type JokesResponse = {
  result: Jokes[];
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface JokesSliceState {
  items: Jokes[];
  status: Status;
}

export type SearchJokesParams = {
  search: string, 
}