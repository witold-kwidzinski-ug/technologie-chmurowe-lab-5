docker network ls | grep lab4-network || docker network create lab4-network

docker run -d --name db --network lab4-network -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=superuser -e POSTGRES_DB=strona-backend -v pgdata:/var/lib/postgresql/data -v "${PWD}/init.sql:/docker-entrypoint-initdb.d/init.sql" postgres:15


docker run -d --name backend-A --network lab4-network -e POSTGRES_HOST=db -e DATABASE=strona-backend -e USER=postgres -e PASSWORD=superuser -e BACKEND_ID=A wkwidzinski/lab4-backend:v4

docker run -d --name backend-B --network lab4-network -e POSTGRES_HOST=db -e DATABASE=strona-backend -e USER=postgres -e PASSWORD=superuser -e BACKEND_ID=B wkwidzinski/lab4-backend:v4
docker run -d --name frontend -p 80:80 --network lab4-network wkwidzinski/lab4-frontend:v4