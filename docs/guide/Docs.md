---
title: Documents
---

## Overview

The documents package contains the necessary documentation to understand how the application works, and was written in MD compiled through vuepress.

## Table of Contents

[[toc]]

## How to use

### Docs

**Directions**

Go to the project directory in your consol.

```sh
cd D:pathtprojectdirectory/timeWidget
```

Install project dependencies

```sh
npm install
```

Run locally

```sh
npm run docs:dev
```

Or Build

```sh
npm run docs:build
```

## App Structure

Bellow is the current structure of the Distance Docs Package.

```
distanceDocs/
├── .vuepress/
│   ├── favicon.ico
│   └── index.html
├── docs/
│   ├── .vuepress/
│   │   ├── components/
│   │   │    └── logo.png
│   │   ├── dist/
│   │   │    └──
│   │   ├── public/
│   │   │    └──
│   │   ├── config.js
│   │   └── enhanceApp.js
│   ├── guide/
│   │   ├── Calculator.md
│   │   ├── Developer.md
│   │   ├── Docs.md
│   │   └── READEME.md
│   └── READEME.md
├── .gitignore
├── package.json
└── package-lock.json
```

### Important Docs Files

| file             | Contents                                              |
| ---------------- | ----------------------------------------------------- |
| Calculator.md    | Contains md for the calculator package                |
| Developer.md     | Contains md for the developer package                 |
| Docs.md          | Contains md for the docs package                      |
| guide/READEME.md | Contains the introduction page for guide/docs         |
| config.js        | Contains vuepress configuration settings and sidebars |
