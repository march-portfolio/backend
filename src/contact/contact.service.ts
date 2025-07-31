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

  async addContact(contactData: any): Promise<any> {
    const contact = this.contactRepository.create({
      data: contactData
    });
    const savedContact = await this.contactRepository.save(contact);
    return savedContact.data;
  }

  async getAllContacts(): Promise<any[]> {
    const contacts = await this.contactRepository.find({
      order: { createdAt: 'DESC' }
    });
    return contacts.map(contact => contact.data);
  }
}