# Functionalities
Provide service for accessing database information (import data and return result)

# Todo

- [x] 
- [x] 
- [x] 
- [x] 
- [x] 
- [x] 
- [x] 

# For System Administrator

"Bus Regulator API" is built from Node, Express, with pm2 as a runtime service for production and Docker for deployment.

- Health Check
- Configuration Description
- Docker

## 1. Health Check

Health checking via endpoint

- API : \health\api
- Database : \health\database

## 2. Configuration Description

Configuration is available by editing .env configuration
```
DB_HOST=your-database-ip-address
DB_USER=your-database-username
DB_PASSWORD=your-database-password
DATABASE=your-database
```

## 3. Docker

The system requires port 3000 and I've attached Dockerfile with configuration for PM2 runtime.

```
docker build -t security-intelligence/api .
docker run -p 3000:3000 -d security-intelligence/api
```