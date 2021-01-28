# nicole

Website for Nicole G. Built with Nuxt and Prismic.

Site structure:

```plaintext
.
└── Homepage (name, menu, image)
    ├── Textiles (masonry grid of images)
    │   ├── Individual item
    │   └── More individual items...
    ├── Illustrations
    │   ├── Animation (list of videos)
    │   ├── Cards (grid of cards linked to shop)
    │   └── Design (beer label masonry grid, cutouts grid, squiggly line / divider image)
    │       └── Detail pages (back button)
    ├── Cafe Hotdog (masonry grid of baked goods)
    │   └── Detail pages
    ├── About (text, photo, form)
    └── Shop
```

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
