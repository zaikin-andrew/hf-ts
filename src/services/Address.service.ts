import { Service } from 'typedi';
import { Address, Customer } from '../models';

@Service()
export class AddressService {
  protected model = Address;

  async create(data = {}): Promise<Address> {
    return this.model.create(data).save();
  }
}