export interface DataStore<T> {
  cache: T;
  getCache(): T;
}