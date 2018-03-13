package com.backbone.application.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backbone.application.entity.Contact;

@RestController
public class ContactController
{
  @RequestMapping("/contactList")
  public Contact getAllContacts() {
      return new Contact(2,"", "", "");
  }
}
