# Cupper

Penrose Library customized theme for its website. Below are stock descriptions. 

An accessibility-friendly Hugo theme, ported from the [original Cupper](https://github.com/ThePacielloGroup/cupper) project.

## Setup development environment

1.  [Download and setup Hugo](https://gohugo.io/getting-started/installing/) 
2.  Clone this git repository 
3.  Start a local hugo server by running following commands in CLI
    ```
    hugo server
    ```
4.  Open your browser and go to http://localhost:1313/archives

Your local hugo instance will re-compile the website everytime you change a file in the folder.


## System Structure

The main branch of this repo contains all the code of Penrose Library webpage and the compiled version of Archives website.  [Archives Repo](https://github.com/Penrose-Library/Archives-Website) contains source code of the pages for Archives website. When Archives repo was updated, github runner will compile it and upload the compiled code into this repo's static folder.  This repo, upon commit, will automaticly compile and upload to [PenroseLibrary Website Public](https://github.com/Penrose-Library/PenroseLibrary_Website_Public) repo as HTML. [PenroseLibrary Website Public](https://github.com/Penrose-Library/PenroseLibrary_Website_Public) repo is linked to Cloudflare Pages. It will automaticly depoloy to Cloudflare Pages. 

## Compile

Github runner is used to compile Hugo code into HTML. The configuration is in .github/workflows/gh-pages.yml. Refer to [Github Actions for Hugo](https://github.com/peaceiris/actions-hugo) for configuration details.


------------------------------------------------------------

## Original Documentation

Below is the origional documentation provided by Cupper hugo theme

## Table of contents

- [Cupper](#cupper)
  - [Setup development environment](#setup-development-environment)
  - [Original Documentation](#original-documentation)
  - [Table of contents](#table-of-contents)
  - [Demo](#demo)
  - [Minimum Hugo version](#minimum-hugo-version)
  - [Installation](#installation)
  - [Updating](#updating)
  - [Run example site](#run-example-site)
  - [Configuration](#configuration)
  - [Logo](#logo)
  - [Favicons](#favicons)
  - [Shortcodes](#shortcodes)
  - [Syntax highlighting](#syntax-highlighting)
  - [Disable toc for a blog post](#disable-toc-for-a-blog-post)
  - [Localization](#localization)
  - [Custom CSS and JS](#custom-css-and-js)
  - [Getting help](#getting-help)
  - [Credits](#credits)

## Demo

https://cupper-hugo-theme.netlify.com/

## Minimum Hugo version

Hugo version `0.60.1` or higher is required. View the [Hugo releases](https://github.com/gohugoio/hugo/releases) and download the binary for your OS.

## Installation

From the root of your site:

```
git submodule add https://github.com/zwbetz-gh/cupper-hugo-theme.git themes/cupper-hugo-theme
```

## Updating

From the root of your site:

```
git submodule update --remote --merge
```

## Run example site

From the root of `themes/cupper-hugo-theme/exampleSite`:

```
hugo server --themesDir ../..
```

## Configuration

Copy `config.yaml` from the [`exampleSite`](https://github.com/zwbetz-gh/cupper-hugo-theme/tree/master/exampleSite), then edit as desired. 

## Logo

Place your SVG logo at `static/images/logo.svg`. If you don't provide a logo, then the default theme logo will be used. 

## Favicons

Upload your image to [RealFaviconGenerator](https://realfavicongenerator.net/) then copy-paste the generated favicon files under `static`. 

## Shortcodes

See the [full list of supported shortcodes](https://cupper-hugo-theme.netlify.com/cupper-shortcodes/).

## Syntax highlighting

Syntax highlighting is provided by [Prism](https://prismjs.com/). See this [markdown code fences example](https://cupper-hugo-theme.netlify.com/cupper-shortcodes/#syntax-highlighting).


## Disable toc for a blog post

Blog posts that have two or more subheadings (`<h2>`s) automatically get a table of contents. To disable this set `toc` to `false`. For example:

```
---
title: "My page with a few headings"
toc: false
---
```

## Localization

The strings in the templates of this theme can be localized. Make a copy of `<THEME_BASE_FOLDER>/i18n/en.yaml` to `<YOUR_SITE_FOLDER>/i18n/<YOUR_SITE_LANGUAGE>.yaml`, and translate one by one, changing the `translation` field.

[Here is a tutorial that goes more in depth about this.](https://regisphilibert.com/blog/2018/08/hugo-multilingual-part-2-i18n-string-localization/)

## Custom CSS and JS

You can provide an optional list of custom CSS files, which must be placed inside the `static` dir. These will load after the theme CSS loads. So, `static/css/custom_01.css` translates to `css/custom_01.css`.

You can provide an optional list of custom JS files, which must be placed inside the `static` dir. These will load after the theme JS loads. So, `static/js/custom_01.js` translates to `js/custom_01.js`.

See the [example site config file](https://github.com/zwbetz-gh/cupper-hugo-theme/blob/master/exampleSite/config.yaml) for sample usage.

## Getting help

If you run into an issue that isn't answered by this documentation or the [`exampleSite`](https://github.com/zwbetz-gh/cupper-hugo-theme/tree/master/exampleSite), then visit the [Hugo forum](https://discourse.gohugo.io/). The folks there are helpful and friendly. **Before** asking your question, be sure to read the [requesting help guidelines](https://discourse.gohugo.io/t/requesting-help/9132).

## Credits

Thank you to [Heydon Pickering](http://www.heydonworks.com) and [The Paciello Group](https://www.paciellogroup.com/) for creating the original Cupper project. 
