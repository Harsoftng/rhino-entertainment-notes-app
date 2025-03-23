SHELL := /bin/bash

-include .env

# Docker operations.

configure-env:
	rm -rf .env;\
	rm -rf ./packages/notes-app/.env;\
	rm -rf ./packages/notes-backend-api/.env;\
	cp .env.dist .env;\
	cp ./packages/notes-app/.env.dist ./packages/notes-app/.env;\
	cp ./packages/notes-backend-api/.env.dist ./packages/notes-backend-api/.env;\

setup-local:
	make configure-env;\
	yarn install;\
	make start;\
	yarn seed;\
	yarn dev;\

start:
	docker-compose up -d ;\

stop:
	docker-compose down ;\

restart:
	docker-compose down ;\
	make start

list:
	docker-compose ps ;\

seed:
	yarn seed

docker-update: stop
	docker-compose pull ;\
	docker volume prune -f || true ;\
	docker-compose up -d --build ;\

docker-clean:
	docker ps -qa --no-trunc --filter "status=exited" | xargs docker rm || true ;\
	docker images -f "dangling=true" -q | xargs docker rmi || true ;\
	docker volume prune -f || true ;\

ssh-backend:
	docker-compose exec notes_backend sh

ssh-frontend:
	docker-compose -f packages/notes-app/docker-compose.yml exec notes_backend sh