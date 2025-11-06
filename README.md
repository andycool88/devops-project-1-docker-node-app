# DevOps Project 1: Dockerized Node.js Web Application

![Docker](https://img.shields.io/badge/Docker-✓-blue?logo=docker)
![Node.js](https://img.shields.io/badge/Node.js-✓-green?logo=node.js)
![Express](https://img.shields.io/badge/Express-✓-lightgrey)
![DevOps](https://img.shields.io/badge/DevOps-Portfolio-orange)

A simple Node.js Express application containerized with Docker, demonstrating fundamental DevOps practices and containerization concepts.

## Project Overview

This project showcases:
- **Containerization** of a Node.js application using Docker
- **Dockerfile** best practices and multi-stage builds
- **Environment configuration** and application configuration
- **Health checks** and monitoring endpoints
- **Docker Hub** integration for image registry

## 📋 Prerequisites

Before running this project, ensure you have installed:
- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Git](https://git-scm.com/downloads)

## 🛠️ Technologies Used

- **Backend**: Node.js, Express.js
- **Containerization**: Docker, Docker Compose
- **Registry**: Docker Hub
- **Development**: JavaScript, npm

## 📁 Project Structure


devops-project-1-docker-node-app/

├── app.js # Main application file

├── package.json # Node.js dependencies and scripts

├── Dockerfile # Docker image definition

├── .dockerignore # Files to ignore in Docker build

└── README.md # Project documentation


## 🏃‍♂️ Quick Start

### Method 1: Using Docker Compose (Recommended)


# Clone the repository
git clone https://github.com/andycool88/devops-project-1-docker-node-app.git
cd devops-project-1-docker-node-app

# Build and run using Docker Compose
docker-compose up -d

# Visit http://localhost:3000

Method 2: Using Docker Commands
# Build the Docker image
docker build -t yourusername/devops-project-1:1.0 .

# Run the container
docker run -d -p 3000:3000 --name node-app yourusername/devops-project-1:1.0

# Check running containers
docker ps

# View application logs
docker logs node-app

Method 3: Using Pre-built Image from Docker Hub

# Pull and run from Docker Hub
docker run -d -p 3000:3000 yourusername/devops-project-1:1.0

🌐 API Endpoints
Endpoint	Method	Description	Response

/	GET	Main endpoint	Application info

/health	GET	Health check	Status OK

/about	GET	Application details	Version info

🐳 Docker Commands Reference
Building and Running
# Build image
docker build -t yourusername/devops-project-1:1.0 .

# Run container
docker run -d -p 3000:3000 --name node-app yourusername/devops-project-1:1.0

# Run with environment variables
docker run -d -p 3000:3000 -e NODE_ENV=production --name node-app yourusername/devops-project-1:1.0

Management

# List running containers
docker ps

# Stop container
docker stop node-app

# Remove container
docker rm node-app

# View logs
docker logs node-app

# Execute command in container
docker exec -it node-app sh

Docker Hub

# Login to Docker Hub
docker login

# Tag image
docker tag yourusername/devops-project-1:1.0 yourusername/devops-project-1:latest

# Push to Docker Hub
docker push yourusername/devops-project-1:1.0
docker push yourusername/devops-project-1:latest

🔧 Development
Running Locally (Without Docker)

# Install dependencies
npm install

# Start development server
npm start

# Server runs on http://localhost:3000

Environment Variables

Variable	Default	Description

PORT	3000	Application port

NODE_ENV	development	Environment mode

📊 Learning Objectives
✅ DevOps Skills Demonstrated
Docker containerization

Dockerfile creation and optimization

Image building and tagging

Container management

Docker Hub registry usage

Environment configuration

Multi-container orchestration (Docker Compose)

✅ Technical Concepts
Container isolation

Port mapping

Layer caching in Docker builds

.dockerignore usage

Health check implementation

🐛 Troubleshooting
Common Issues
Port already in use:

# Use a different port
docker run -d -p 3001:3000 yourusername/devops-project-1:1.0

# Run in foreground to see errors
docker run -p 3000:3000 yourusername/devops-project-1:1.0

# On Linux, you might need to use sudo
sudo docker ps

Debugging Commands

# Check container status
docker ps -a

# Inspect container details
docker inspect node-app

# View system resources
docker stats

# Check Docker daemon
docker info

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

👨‍💻 Author
Emaye Andrew

GitHub: @Andycool88

Docker Hub: @Andycool88

LinkedIn: www.linkedin.com/in/andrew-emaye-381a53141

🙏 Acknowledgments
Docker documentation

Node.js community

Express.js framework


