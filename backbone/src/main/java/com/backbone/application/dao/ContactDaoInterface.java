package com.backbone.application.dao;

import java.util.List;

import com.backbone.application.entity.Contact;

public interface ContactDaoInterface
{
  List<Contact> getAllContacts();
  Contact getContactById(int articleId);
  void addContact(Contact contact);
  void updateContact(Contact contact);
  void deleteContact(int articleId);
  boolean contactExists(String contact, String category);
}
