# Pyxel Lab

playing around with physical pixels

## Setting up paper programs

clone repo

```
git clone https://github.com/pyxel-lab/paperprograms.git
```

init environment (this is necessary to set the correct database)

```
source init-environment.sh
```

> This might not work if you haven't been added to the heroku app contact @paulsonnentag to


start server by running this command in the paperprogramms directory

```
npm run dev
```

If there are no programs in the space there is probably a problem with the database. Verify that the environment variable DATABASE_URL is set:
```
echo $DATABASE_URL
```

> Should return something like: postgres://......
