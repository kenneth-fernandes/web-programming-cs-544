//<https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage>
const STORE = window.sessionStorage;

export default class Cache {
  constructor(store = STORE) {
    this.store = store;
  }

  /** return object stored for key in this cache; 
   *  returns falsy if not found. 
   */
  get(key) {
    const item = this.store.getItem(key);
    return item ? JSON.parse(item) : false;
  }

  /** cache object val under key in this cache.  
   *  returns this to allow chaining.
   */
  set(key, val) {
    this.store.setItem(key, JSON.stringify(val));
    return this;
  }

}
