import { Service } from 'typedi';
import { Contact } from '../models';

@Service()
export class ContactService {
  protected model = Contact;

  async findById(id: number): Promise<Contact> {
    return this.model.findOneById(id);
  }

  async create(data = {}): Promise<Contact> {
    return this.model.create(data).save();
  }
}