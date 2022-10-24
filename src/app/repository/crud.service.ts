import { CrudMapType } from '../interfaces/crud-map-type.interface';
import { Delegate } from '../interfaces/delegate.interface';

export abstract class CrudService<D extends Delegate, T extends CrudMapType> {
  constructor(protected delegate: D) {}

  public getDelegate(): D {
    return this.delegate;
  }

  public async create(data: T['create']) {
    const result = await this.delegate.create(data);
    return result;
  }

  public async delete(data: T['delete']) {
    const result = await this.delegate.delete(data);
    return result;
  }

  public async findUnique(data: T['findUnique']) {
    const result = await this.delegate.findUnique(data);
    return result;
  }

  public async update(data: T['update']) {
    const result = await this.delegate.update(data);
    return result;
  }
}
