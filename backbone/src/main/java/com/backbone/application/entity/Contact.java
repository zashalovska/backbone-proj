package com.backbone.application.entity;

public class Contact
{
  private final long id;
  private final String name;
  private final String phone;
  private final String group;

  public Contact(long id, String contactName, String phone, String group)
  {
    this.id = id;
    this.name = contactName;
    this.phone = phone;
    this.group = group;
  }

  public long getId()
  {
    return id;
  }

  public String getName()
  {
    return name;
  }

  public String getPhone()
  {
    return phone;
  }

  public String getGroup()
  {
    return group;
  }
}
