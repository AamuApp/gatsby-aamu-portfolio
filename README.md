# Gatsby Portfolio Website

This repo contains a static website written with [GatsbyJS](https://www.gatsbyjs.org/), integrated with content coming from [Aamu.app](https://aamu.app/). 

![Preview](preview.png)

If you want to use try this out yourself, you first need to set up a project on Aamu.app which will host your data. 

See the demo site here: **[DEMO](https://gatsby-aamu-portfolio.netlify.com/)**

### Create an Aamu.app account

To use this website, you need an [Aamu.app](https://aamu.app/) account. Create one/log into your account and then create a database from the template **gatsby-aamu-portfolio**: 

![2020-02-10_11-04](https://user-images.githubusercontent.com/433707/74135827-a8d7b100-4bf5-11ea-90c2-e70423077b7f.png)

After that, you need an **API key**. Go to database settings for your newly created database and create an API key. Copy-paste that to somewhere safe.

### Deployment to Netlify

You can use this repository on Netlify. After creating an Aamu.app database, click this:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/AamuApp/gatsby-aamu-portfolio)

Netlify will ask your permission to clone this repository — First click *Connect to GitHub*, then click *Authorize*. 

You will be then taken to a page which asks your *secret token*. Enter your API key here. 

Submit the form and Netlify will start building your site. This cloned repository will be on your GitHub account.


# Development on your local machine

### Get the source code and install dependencies.

First, install the dependencies of this project:

```
git clone git@github.com:AamuApp/gatsby-aamu-portfolio.git
cd gatsby-aamu-portfolio
npm install
```

Add an `.env` file containing the read-only API token of your Aamu.app database:

```
echo 'AAMU_API_KEY=abc123' >> .env
```

Then, to run this website in development mode (with live-reload):

```
npm develop
```

To build the final, production ready static website:

```
npm build
```

The final result will be saved in the `public` directory.

## About

The goal of this project is to show how easily you can create static sites using the content (text, images, links, etc.) stored on [Aamu.app](https://aamu.app). This project is configured to fetch data from a specific administrative area using [the API Aamu.app provides](https://aamu.app/docs/content-management-api).

You can find further information about how to integrate Aamu.app with Gatsby in [our documentation](https://aamu.app/docs/static-generators/gatsbyjs).

This websites uses:

- [npm](https://npmpkg.com/) as package manager;
- [GatsbyJS](https://github.com/gatsbyjs/gatsby) as website generator;
