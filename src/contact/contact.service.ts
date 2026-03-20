import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contact } from './contact.entity';
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact)
    private contactRepository: Repository<Contact>,
  ) {}

  async addContact(contactData: CreateContactDto) {
    const contact = this.contactRepository.create({ data: contactData });
    return await this.contactRepository.save(contact);
  }

  async getAllContacts() {
    return await this.contactRepository.find();
  }
}
