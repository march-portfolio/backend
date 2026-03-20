import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contact } from './contact.entity';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact)
    private contactRepository: Repository<Contact>,
  ) {}

  async addContact(contactData: any) {
    const contact = this.contactRepository.create({ data: contactData });
    return await this.contactRepository.save(contact);
  }

  async getAllContacts() {
    return await this.contactRepository.find();
  }
}
