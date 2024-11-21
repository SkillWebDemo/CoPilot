# CoPilot CRM App

## Overview
CoPilot CRM App is a simple Customer Relationship Management (CRM) system built using Node.js and Express.js. It provides RESTful API endpoints to manage customers, their contact persons, and associated contact information.

## Features
- **Customers Management**: Add, view, and manage customers.
- **Contact Persons Management**: Add, view, and manage contact persons associated with customers.
- **Contact Information Management**: Store and manage contact information for both customers and contact persons.

## Endpoints

### GET Endpoints
- **Get all customers**: `GET /api/customers`
- **Get all contact persons**: `GET /api/contact_persons`
- **Get all contact information**: `GET /api/contact_info`

### POST Endpoints
- **Add a new resource**: `POST /api/resource`
    - Request body should include:
    ```json
    {
      "type": "customer" | "contact_person" | "contact_info",
      "data": { ... }
    }
    ```



 
## Database Schema
The database schema consists of three tables: `customers`, `contact_persons`, and `contact_info`.

### customers Table
- `customer_id`: INT, Primary Key, Auto Increment
- `name`: VARCHAR(255), NOT NULL
- `contact_info_id`: INT, Foreign Key to `contact_info(contact_info_id)`

### contact_info Table
- `contact_info_id`: INT, Primary Key, Auto Increment
- `phone`: VARCHAR(50)
- `email`: VARCHAR(255)
- `address`: TEXT
- `other`: TEXT

### contact_persons Table
- `contact_person_id`: INT, Primary Key, Auto Increment
- `customer_id`: INT, Foreign Key to `customers(customer_id)`
- `name`: VARCHAR(255), NOT NULL
- `title`: VARCHAR(255)
- `latest_contact_date`: DATE
- `family_notes`: TEXT
- `sports_team_preferences`: TEXT
- `contact_info_id`: INT, Foreign Key to `contact_info(contact_info_id)`

## Getting Started

### Prerequisites
- Node.js
- npm

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/copilot-crm-app.git
   cd copilot-crm-app 


### Schema Diagram

```plaintext
+----------------+          +----------------+          +----------------+
|   customers    |          |  contact_info  |          | contact_persons|
+----------------+          +----------------+          +----------------+
| customer_id    |<---------| contact_info_id|--------->| contact_info_id|
| name           |          | phone          |          | contact_person_id|
| contact_info_id|          | email          |          | customer_id    |
+----------------+          | address        |          | name           |
                            | other          |          | title          |
                            +----------------+          | latest_contact_date|
                                                        | family_notes   |
                                                        | sports_team_preferences|
                                                        +----------------+