# Gatsby Portfolio Website

This repo contains a static website written with [GatsbyJS](https://www.gatsbyjs.org/), integrated with content coming from [Aamu.app](https://aamu.app/). 

![Preview](preview.png)

If you want to use try this out yourself, you first need to set up a project on Aamu.app which will host your data. 

See the demo site here: **[DEMO](https://gifted-wing-586384.netlify.com/)**

## Create an Aamu.app account

To use this website, you need an [Aamu.app](https://aamu.app/) account. Create one/log into your account and then create a database from the template **gatsby-aamu-portfolio**: 




## Repo usage on your machine

First, install the dependencies of this project:

```
yarn install
```

Add an `.env` file containing the read-only API token of your Aamu.app database:

```
echo 'AAMU_API_KEY=abc123' >> .env
```

Then, to run this website in development mode (with live-reload):

```
yarn develop
```

To build the final, production ready static website:

```
yarn build
```

The final result will be saved in the `public` directory.

## Repo usage on a third party hosting service

You can also use this repository on Netlify: 

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/AamuApp/gatsby-aamu-portfolio)

## About

The goal of this project is to show how easily you can create static sites using the content (text, images, links, etc.) stored on [Aamu.app](https://aamu.app). This project is configured to fetch data from a specific administrative area using [the API Aamu.app provides](https://aamu.app/docs/content-management-api).

You can find further information about how to integrate Aamu.app with Gatsby in [our documentation](https://aamu.app/docs/static-generators/gatsbyjs).

This websites uses:

- [Yarn](https://yarnpkg.com/) as package manager;
- [GatsbyJS](https://github.com/gatsbyjs/gatsby) as website generator;
