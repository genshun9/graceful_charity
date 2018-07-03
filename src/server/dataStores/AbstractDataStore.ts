import {DataStore} from "./DataStore";

export default abstract class AbstractDataStore<T> implements DataStore<T> {
  cache: T;
  init(props):void {}

  getCache(): T {
    return this.cache;
  };
}