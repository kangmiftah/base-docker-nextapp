   npx create-next-app nama_app --example=https://github.com/kangmiftah/base-docker-nextapp

docker-compse up -d --build

docker-compose exec nextapp yarn prisma generate

docker-compose exec nextapp yarn db push