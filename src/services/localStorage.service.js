export const storageService = {
    query,
    get,
    post,
    put,
    remove,
  };
  
  // Retrieves the entities from localStorage.
  // param: storage key [string]; returns: list of entities [Promise<Array>].
  async function query(key) {
    let entities = _getFromStorage(key);  
    return new Promise((resolve) => resolve(entities));
  }
  
  // Retrieves a specific entity by its ID.
  // params: storage key [string], entity id [number]; returns: wanted entity [Promise<Object>].
  async function get(key, entityId) {
    const entities = await query(key);
    const entity = entities.find((entity) => entity.id === entityId);
    if (!entity) throw new Error(`Can't find ${entityId} in ${key}.`);
    return entity;
  }
  
  // Adds a new entity to the list.
  // params: storage key [string], new entity [Object]; returns: added entity [Promise<Object>].
  async function post(key, newEntity) {
    const entities = await query(key);
    newEntity = { ...newEntity, id: _getNextAvailableId(entities) };
    entities.push(newEntity);
    _saveToStorage(key, entities);
    return newEntity;
  }
  
  // Updates an existing entity by its ID.
  // params: storage key [string], undated entity [Object]; returns: updated entity [Promise<Object>].
  async function put(key, UpdatedEntity) {
    const entities = await query(key);
    const idx = entities.findIndex((entity) => entity.id === UpdatedEntity.id);
    if (idx === -1) throw new Error(`Can't find ${UpdatedEntity.id} in ${key}.`);
    entities[idx] = UpdatedEntity;
    _saveToStorage(key, entities);
    return UpdatedEntity;
  }
  
  // Removes an entity by its ID.
  // params: storage key [string], entity id [number].
  async function remove(key, entityId) {
    const entities = await query(key);
    const idx = entities.findIndex((entity) => entity.id === entityId);
    if (idx == -1) throw new Error(`Cannot find item ${entityId} in ${key} for removal.`);
    const removedEntity = entities.splice(idx, 1);
    _saveToStorage(key, entities);
    return removedEntity;
  }
  
  // Saves data to localStorage.
  // params: storage key [string], data [Array].
  function _saveToStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  
  // Saves data to localStorage.
  // params: storage key [string].
  function _getFromStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  }
  
  // Finds the next available ID based on the existing entities' IDs.
  function _getNextAvailableId(entities) {
    const ids = entities.map((entity) => entity.id);
    const sortedIds = ids.sort((a, b) => a - b);
    
    // Return the first missing index in the sequence of IDs
    for (let i = 0; i < sortedIds.length; i++) {
      if (sortedIds[i] !== i + 1) {
        return i + 1;
      }
    }
  
    // If no gaps, return the next ID (length + 1)
    return sortedIds.length + 1;
  }
  