import { Controller, Get, HostParam } from '@nestjs/common';

@Controller({ host: 'account.exemple.com' })
export class AccountControllerController {
  @Get()
  getInfo(@HostParam('account') account: string) {
    return account;
  }
}
