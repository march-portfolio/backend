import { Controller, Post, Body, Get } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('contacts')
@Controller('contacts')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  @ApiOperation({ summary: 'Submit a contact message' })
  @ApiResponse({ status: 201, description: 'Message sent successfully' })
  createContact(@Body() body: CreateContactDto) {
    return this.contactService.addContact(body);
  }

  @Get()
  @ApiOperation({ summary: 'Get all contact messages' })
  @ApiResponse({ status: 200, description: 'Return all messages' })
  getContacts() {
    return this.contactService.getAllContacts();
  }
}
