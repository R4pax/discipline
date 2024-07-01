export function setStore(name: string, value: any): void {
  localStorage.setItem(name, JSON.stringify(value));
}

export function getStore(name: string): any {
  return JSON.parse(localStorage.getItem(name) || "null");
}
