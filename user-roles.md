---
layout: documentation
title: User roles and permissions
category: organization
sidebar: navigation.html
excerpt: What permissions a user have depending on their role in the organization and/or the room
---

### Room, which is not part of any organization
When a room is created, its creator is added with Owner role to the room's member list. Every member of the room can see the room in their dashboard. Specific privileges for every role:
* Owner - can invite other members, lock/unlock the room, change its name or delete it
* Contributor - can edit the room floor plan, but cannot lock/unlock, rename or delete it
* Viewer - can see the room read-only

### User roles in organizations
When organization is created, its creator is added with Owner role to its members list. Every member of the organization can see it in their dashboard. The specific priviliges for each role are:
* Owner - can invite other members, edit organization metadata and delete it. It can also delete existing rooms and offices
* Contributor - can add rooms and offices to the organization (but cannot delete rooms, if they are not their owner ones)
* Viewer - can see offices and rooms in the organization

### Effective user role and privileges
User roles for a room which is part of organization are inherited from the organization it is part of. Here are some examples:
Room HQ1-105 is part of OfficeRND organization. John is Owner of the organization. Tim is Collaborator in the organization and created HQ1-105, so he is Owner of the room. Peter is another Collaborator in the organization and Tanya is not part of the organization, but Tim shared the room to her and added her as Viewer. Now the effective roles of these users for HQ1-105 are:
* John is Owner
* Tim is Owner
* Peter is Collaborator
* Tanya is Viewer
and for the organization OfficeRND:
* John is Owner
* Tim is Collaborator
* Peter is Collaborator
* Tanya is not part of the organization
