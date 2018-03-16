import { Get, JsonController } from 'routing-controllers';
import { JobService, UserService } from '../services';

@JsonController('/job')
export class JobController {

  constructor(private readonly jobService: JobService) {
  }


}