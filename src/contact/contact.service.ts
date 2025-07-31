import { Injectable } from '@nestjs/common';

@Injectable()
export class ContactService {
  private contacts = [];

  addContact(contact: any) {
    this.contacts.push(contact);
    return contact;
  }

  getAllContacts() {
    return this.contacts;
  }
}
