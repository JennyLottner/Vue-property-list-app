import { storageService } from "./storage.service";

const STORAGE_KEY = "properties";

// Retrieves the properties from localStorage or saves demo data to storage if empty.
export async function query() {
  let properties = await storageService.query(STORAGE_KEY);
  if (!properties.length) {
    const demoData = await import("../data/properties.json");
    properties = demoData.default;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(properties));
  }
  return properties;
}

// Retrieves a specific property by its ID.
export function getById(propId) {
  return storageService.get(STORAGE_KEY, propId);
}

// Adds a new property to the list or updates an existing property by its ID.
export function save(propToSave) {
  return propToSave.id
    ? storageService.put(STORAGE_KEY, propToSave)
    : storageService.post(STORAGE_KEY, propToSave);
}

// Removes an property by its ID.
export function remove(propId) {
  return storageService.remove(STORAGE_KEY, propId);
}

// Returns empty property.
export function getEmptyProperty() {
  return { name: "", price: 0, imgUrl: "" };
}
