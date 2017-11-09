function proxify( target, property ) {
  const navigable = target();
  const fn = () => navigable === undefined ? undefined : navigable[property];
  return new Proxy( fn, { get: proxify } );
}

module.exports = class SafeObject {
  constructor( value ) {
    return new Proxy( () => value, { get: proxify } );
  }
};
