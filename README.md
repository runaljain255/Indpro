This Project is made as an assignment for INDPRO.

Project Overview -

Created API Project to make CRUD Operations on Product Model using .net 8 API, Entity Framework and Repository Design. The Swagger documents SS is attached.
Sqlite3 is used for the db.
![image](https://github.com/runaljain255/Indpro/assets/55238317/511305fd-0d70-4ed8-8f65-d319a6e9e118)

Created Client Side project to call these APIs and display the produc list , Add new product , Update existing Product and delete any product. Also Validation is implemented
on the field like - 

1.Name - required - should be less than 50 characters.

2.Description - not required - should be less than 200 characters.

3.Price - required.

These validations will work in client side as well as server side.

**Note - The designs are generated as per the developer preference as no Wireframe was provided.

Fetching All Products - 
![image](https://github.com/runaljain255/Indpro/assets/55238317/2258578b-74e6-4d9b-92b9-d98abca505e7)

Validation while adding new product - 
![image](https://github.com/runaljain255/Indpro/assets/55238317/53429b34-b687-4db4-82a3-02f8e4ae092d)

Adding new product - 
![image](https://github.com/runaljain255/Indpro/assets/55238317/9ee9db72-0e0b-4fa6-b62c-fda5f73e3e01)

Editing Existing Product (this also has same validation) - 
![image](https://github.com/runaljain255/Indpro/assets/55238317/6a397495-b52f-4613-98b1-caabe6c13691)
![image](https://github.com/runaljain255/Indpro/assets/55238317/36e4b707-1960-4538-8388-a4f558053c1d)

Deleting a Product - 
![image](https://github.com/runaljain255/Indpro/assets/55238317/ad4cc01d-9a55-4015-a879-a541d469e7b6)
![image](https://github.com/runaljain255/Indpro/assets/55238317/d31670d0-8d44-48f4-a65a-96c2b1d5900b)

Mobile Responsiveness - 
![image](https://github.com/runaljain255/Indpro/assets/55238317/e8f530b3-e668-4cfc-a5f0-86c84b344c6f)
![image](https://github.com/runaljain255/Indpro/assets/55238317/8fa83a25-9e22-4cc9-927b-24d89c2c7f3d)

Setting up the solution - 
1. .NET 8 API Solution (./INDPRO-API)- As I have used code first migration to make the database and entities, to setup the project in local the steps need to be followed are - 

  a. Downloading the solution and opening it (.sln) in visual studio.
  
  b. Ensuring .net 8 sdk and sqllite 3  is installed in the local machine.
  
  c. Building solution and installing dependencies from nuget package manager from visual studio. - https://learn.microsoft.com/en-us/dotnet/core/tools/dotnet-restore
  
  d. Applying Migration and Updating Database - https://learn.microsoft.com/en-us/ef/core/managing-schemas/migrations/?tabs=dotnet-core-cli
  
  e. Building and running the solution - https://learn.microsoft.com/en-us/dotnet/core/tools/dotnet-run


2. React App (./indpro-client) -

  a. Verify npm (>=9.5.1) , node (>=18.16.0) and react (>=18.2.0) is installed in the local machine.
  
  b. Go into the indpro-client directory. 'cd indpro-client'
  
  c. run 'npm install' to install the packages used like react bootstrap, axios etc.
  
  d. run 'npm run' command to run the solution







