docker-compse up -d --build

docker-compose exec nextapp yarn prisma generate

docker-compose exec nextapp yarn db push