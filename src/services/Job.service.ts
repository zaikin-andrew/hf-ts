import { Service } from 'typedi';
import { messages } from '../managers';
import { Job } from '../models';

@Service()
export class JobService {
  protected model = Job;

}