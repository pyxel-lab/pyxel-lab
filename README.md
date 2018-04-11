# Pyxel Lab

playing around with physical pixels

## Setting up paper programs

clone repo

```
git clone https://github.com/pyxel-lab/paperprograms.git
```

start server by running this command in the paperprogramms directory

```
npm run dev
```

Modify the space name in the config in `scripts/init-db/config`. This should be the value you see on the `camera.html` page.

```JavaScript
{
  "spaceName": "Your space name",
  "paperNumbers": ["2", "257", "426", "757"]
}
```

In the top level directory of this repo execute this script to initialize the papers

```
node scripts/init-db/index.js
```
