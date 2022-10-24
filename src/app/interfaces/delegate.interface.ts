export interface Delegate {
  create(data: unknown): unknown;
  delete(data: unknown): unknown;
  update(data: unknown): unknown;
  findUnique(data: unknown): unknown;
}
