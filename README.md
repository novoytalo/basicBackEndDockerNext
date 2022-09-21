# basicBackEndDockerNext
Just like the name says this is a basic implementation.
Using Nest.js, Adminer, Postgresql and Node Docker image 

Make sure you have docker and docker compose and run:
docker-compose up --build

Only implemented the "run dev". 


add -> the module 'users' have CRUD implemented. Module 'cats' is only for use case, exemple from Nest.js site. 



Module "grandetabela" is for selection and query using typeorm. Implemented "Get" for now ( look at 'api.http' line 72 the endpoint aplication). This module I search for id, Order_Date and Quantity from a big table that I take as exemple from here: https://www.kaggle.com/datasets/kyanyoga/sample-sales-data?resource=download . I will put together the frontend, backend and Prophet to make a web aplication solution to forecast. 
Note: data from kaggle is not sorted and if you import using Adminer you like have to change the collumn "Row Id" to "id" and others who have that space between words you have to put a '_'. Like: 'Order ID' => 'Order_ID'.

For now i only tested basics.