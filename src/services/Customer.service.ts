import { Service } from 'typedi';
import { Customer } from '../models';

@Service()
export class CustomerService {
  protected model = Customer;

  async find(): Promise<Customer[]> {
    return this.model.find();
  }

  async findById(id: number): Promise<Customer> {
    return this.model.findOneById(id, {relations: ['address', 'contact']});
  }

  async create(data = {}): Promise<Customer> {
    return this.model.create(data).save();
  }
}