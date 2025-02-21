---
title: AWS re:Invent 2021 - First day
date: "2021-11-29"
description: "Firsts are a unique opportunity, first impression, first place, first day. Find out what the first day of AWS re:Invent brought."
tags:
  - aws
  - re:invent
  - blog
---


## API308

<img src="/API308-1.png" width="600" alt="Slide from API308" />

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?

---

# FIXME boilerplate

It comes with all the blog standard features:

- Posts and Pages
- Pagination
- Tags
- Static server-rendered content

A bunch of good practices:

- RSS feed
- \*Considerate mark-up
- Service worker with offline content
- Lazy loading images
- Critical CSS

_\*Considerate means semantic, accessible mark-up, written for both humans and machines._

<br>

Additional features:

- Seamless JavaScript and SCSS compilation (no build process)
- Data-driven navigation
- Customisable settings including theming

Additional features:

- Comments
- Claps
- Reading List
- Login

These additional features that have persistent data including user generated content. On JAMstack sites including rich content usually means complicated build processes and multiple third-party services. This doesn't sit well with me since owning my own data and tinkering with the platform is a big motivation for building a static personal site.

That's why I opted to pair Supermaya with [KeystoneJS](https://keystonejs.com/) to create a unified API that you own and manage. Each of these features are added progressively with JavaScript and will fail gracefully if not configured or the server can't be reached. You can opt-out on a per feature basis by modifying the data in `site/_data/site.js`, or on a per-page basis with front-matter.

## Deploying Supermaya + Keystone

To get started deploy the [Keystone JAMstack plus starter kit](https://github.com/MadeByMike/keystone-jamstack-plus) platform to Heroku.

Once installed visit the site on Heroku and copy your Keystone API URL. Follow the instructions to automatically deploy Supermaya to Netlify where you will be asked to enter the Keystone API URL.

Supermaya is designed work with the Keystone JAMstack plus platform to be a launch pad for larger ideas. Allowing you to go all the way from a simple static website to a feature rich application if you want.

**Note**: Rich features are optional. Supermaya is a perfectly good starter template for 11ty without any other services. You can deploy Supermaya on it's own and add a `KEYSTONE_API` environmental variable later if you wish.

## Deploying Supermaya

To deploy Supermaya on its own you can use this link to [deploy to Netlify](https://app.netlify.com/start/deploy?repository=https://github.com/MadeByMike/supermaya). Leave the `KEYSTONE_API` blank if you don't have one. Alternatively you can clone this repository and run it locally.

## Starting Supermaya

To start the project run:

```
npm install
```

Then:

```
npm start
```

## Configure site information

Configure important site-wide information like the site name, description and default author information:

```
site/_data/site.js
```

## Configure navigation

Change the site navigation by modifying:

```
site/_data/navigation.json
```

## Color schemes

Supermaya includes basic theming. Select an alternative to the black and white feature colors by modifying the `theme` in:

```
site/_data/site.js
```

## Keystone features

If you connected Supermaya to a keystone backend you can toggle features under `keystone` in:

```
site/_data/site.js
```

## Add CSS

In Supermaya SCSS files are compiled on-the-fly by 11ty and added to data. This means you can write inline CSS directly into templates and partials like this: `<style>{% raw %}{{css["compilation-target"] | safe}}{% endraw %}</style>`. Where "compilation-target" is the key added to the list of SCSS files to compile in:

```
site/_data/css.js
```

Each entry added to the `targets` array will be available as site data and a static file will also be written to `css/[compilation-target].css`.

Source files for scss have been added to the directory `site/src/scss`.

## Add JavaScript

Similar to how SCSS works, JavaScript files in Supermaya are also compiled on-the-fly using Webpack.

The Webpack configuration contains a loader for `.js` files that will transpile ES6 to ES5 meaning you can safely write modern JavaScript. The Webpack configuration can be extended or modified in: `site/utils/compile-webpack.js`.

Files generated by Webpack are added to site data so you can write inline JavaScript in templates and partials like this: `<script>{% raw %}{{css["output-filename"] | safe}}{% endraw %}</script>`. The "output-filename" should be the full name of a file generated by Webpack including the extension.

You can add additional entry points by modifying the `targets` array in:

```
site/_data/js.js
```

Each file generated will also be available as a static file at the path: `js/[output-filename]`.

Source files for javascript have been added to the directory `site/src/js`.

## Critical CSS

Supermaya is capable of generating criticalCSS although this is turned off by default for performance reasons. You can turn this feature on by modifying:

```
site/_data/site.js
```
