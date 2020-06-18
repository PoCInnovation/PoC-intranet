# PoC-intranet
PoC's intranet

## 1. Launch the database

```sh
sudo docker-compose up -d --build
```

## 2. Prepare the database

```sh
npm install
npx prisma migrate up --experimental
npx prisma generate
npm run dev
```

## Database

- User
    - user_id
    - mail
    - token_office
    - roles[]
    - projects[]

- Roles
    - role_id
    - role_name
    - admin
    - add role
    - recommend
    - write article
    - add member
    - create project

- Project
    - project_id
    - project_name
    - status
    - link airtable
    - link github

## Routes

### User
#### Create user
Method POST
Route: `user/add`

Body:
- email

> User must be admin

#### Get user
Method GET
Route: `/user/get`

Body:
- email

#### Delete user
Method DELETE
Route: `/user/delete`

Body:
- email

### Roles
#### Create role
Method POST
Route: `/role/add`

Body:
- role_name
- admin (0/1)
- list of perms (0/1)

> User must be admin

#### Get role
Method GET
Route: `/role/get`

Body:
- role_name

> User must be login

#### Update role
Method PUT
Route: `/role/update`

Body:
- role_name
- admin (0/1)
- list of perms (0/1)

> User must be admin

#### Delete role
Method DELETE
Route: `/role/delete`

Body:
- role_name
> User must be admin


### Project
#### Create project
Method POST
Route: `/project/add`

Body:
- project_name
- status
- link_airtable
- link_github

> User must be login

#### Get project
Method GET
Route: `/project/get`

Body:
- project_name

> User must be login

#### Update project
Method PUT
Route: `/project/update`

Body:
- project_id
- project_name
- status
- link_airtable
- link_gitgub

> User must be login


#### Delete project
Method DELETE
Route: `/project/delete`

Body:
- project_name

> User must be login

### Link

Method PUT
Route: `/user/update/project`

Body:
