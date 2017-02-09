docker exec -it $(docker ps | grep server | awk '{ print $1 }') /bin/sh -c 'node ./seeders/items-seeder.js'
