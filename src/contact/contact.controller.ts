import { Controller, Post, Body, Get } from '@nestjs/common';
import { ContactService } from './contact.service';

@Controller('contacts')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  createContact(@Body() body: any) {
    return this.contactService.addContact(body);
  }

  @Get()
  getContacts() {
    return this.contactService.getAllContacts();
  }
}
