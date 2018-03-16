import { Service } from 'typedi';
import { messages } from '../managers';
import { Job } from '../models';
import { BaseService } from './service.base';

@Service()
export class JobService extends BaseService {
  protected model = Job;

}