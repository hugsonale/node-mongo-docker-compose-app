# node-mongo-docker-compose-app

📦 Node.js + MongoDB Docker Compose App

A fully containerized two-tier application built with Node.js (Express) and MongoDB, orchestrated using Docker Compose.
This project demonstrates core DevOps skills including containerization, multi-stage builds, service orchestration, volumes, environment configuration, and local development optimization.

🚀 Project Overview

This application consists of:

Node.js Backend API (Express)

MongoDB Database

Docker Compose for orchestration

MongoDB persistent storage using Docker volumes

Multi-stage Dockerfile for production-optimized builds

The goal is to showcase how a simple 2-tier system can be fully containerized and run consistently across environments.

🧱 Architecture Diagram
flowchart TD
    A[User / Client] -->|HTTP :3000| B(Node.js Backend<br/>Container)

    subgraph C[Docker Compose Network]
        B -->|mongodb://mongo:27017/mydb| D(MongoDB Container<br/>Port 27017)
    end

    D --> E[(mongo_data Volume)]

📁 Project Structure
node-mongo-docker-compose-app/
│
├── backend/
│   ├── package.json
│   ├── server.js
│   └── Dockerfile
│
├── docker-compose.yml
└── README.md

# 🐳 Docker Setup
### 1️⃣ Build & Start Containers

Run from the project root:

docker-compose up --build

2️⃣ Stop Containers
docker-compose down

3️⃣ View Running Services
docker ps

# 🌐 Access the Application

After starting the Compose stack:

Backend API
http://localhost:3000


You should see:

Node.js + MongoDB Containerized App

# 🛠️ Tech Stack

Node.js – Express API server

MongoDB – NoSQL document database

Docker – Containerization

Docker Compose – Multi-container orchestration

Multi-stage builds – Optimized production images

# ⚙️ Environment Configuration

The backend connects to MongoDB using the Compose service name:

mongodb://mongo:27017/mydb


Defined inside Docker Compose.

MongoDB data persists via:

mongo_data:/data/db

# 🏗️ How It Works
Node.js Backend

Exposes port 3000

Connects to MongoDB using a Docker network hostname

Built using a multi-stage Dockerfile for small, secure images

MongoDB Database

Official MongoDB container

Uses a named Docker volume for persistence

Docker Compose

Automatically sets up networking

Ensures containers start in the correct order

Maps local ports for access

# 📦 Production-Ready Dockerfile (Backend)
# -------- Stage 1: Builder --------
FROM node:18-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install

COPY . .

# -------- Stage 2: Production --------
FROM node:18-alpine
WORKDIR /app

COPY --from=builder /app ./

EXPOSE 3000
CMD ["npm", "start"]

🧪 Testing MongoDB Connection

Inside the backend logs you should see:

Connected to MongoDB


If MongoDB is not ready, Docker Compose automatically retries until healthy.