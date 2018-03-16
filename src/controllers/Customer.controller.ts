import { Authorized, BadRequestError, Body, Get, JsonController, Param, Post, Put, Req } from 'routing-controllers';
import { messages } from '../managers';
import { AddressService, ContactService, CustomerService } from '../services';

@Authorized()
@JsonController('/customer')
export class CustomerController {

  constructor(private readonly customerService: CustomerService,
              private readonly addressService: AddressService,
              private readonly contactService: ContactService) {
  }

  @Get()
  find() {
    return this.customerService.find();
  }

  @Post()
  async create(@Body() data) {
    if (!data.name) return new BadRequestError('No name');
    const customer = await this.customerService.create({ name: data.name });

    return Promise.all([
      this.addressService.create({
        streetAddress: data.streetAddress,
        city: data.city,
        state: data.state,
        postCode: data.postCode,
        customer,
      }),
      this.contactService.create({
        website: data.website,
        phone: data.phone,
        customer,
      }),
    ]).then(() => ({ message: messages.customer.success.add, id: customer.id }));
  }

  @Get('/:id')
  findById(@Param('id') id: number) {
    return this.customerService.findById(id);
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() data) {
  }
}