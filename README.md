# Caloric Demand Calculator - Backend

This is the backend for the **Caloric Demand Calculator** application, built with [NestJS](https://nestjs.com/) and using MySQL as the database. It provides APIs for user authentication, data storage, and caloric demand calculations.

## Features

- **User Management**: Registration, login, and authentication using JWT.
- **Data Management**: Operations for user-related data.
- **Custom Utilities**: Includes password hashing and data sorting utilities.

## Key Modules

- **Auth Module**: Handles user login, JWT generation, and authentication.
- **User Module**: Manages user entities and operations.
- **Data Module**: Manages caloric data entities and CRUD operations.

## Getting Started

### Requirements

- Node.js (v16 or later)
- MySQL database
- NestJS CLI (optional, for development)

### Suggested folder structure (to types work correctly):

* <b>/caloric-demand-front</b> for fronted
* <b>/caloric-demand-back</b> for backend

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Dzejkop02/caloric-demand-back
   cd backend
   ```
   
2. Install dependencies:
    ```bash
   npm install
   ```
3. Configure the database connection in <code>src/db.config.ts</code>

## API Endpoints
### Authentication
* <code>POST /auth/login</code>: Logs in a user and returns a JWT token.
* <code>GET /auth/logout</code>: Logs out the currently authenticated user.
### Users
* <code>POST /user/register</code>: Registers a new user.
### Data
* <code>GET /data</code>: Retrieves all caloric data entries.
* <code>POST /data/:day</code>: Adds or updates caloric data for a specific day.
* <code>DELETE /data</code>: Deletes all caloric data entries.
* <code>DELETE /data/:day</code>: Deletes caloric data for a specific day.
