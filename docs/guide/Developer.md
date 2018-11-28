---
title: Developer
---

## Overview

The developer package is a simple slideout menu created with vue js.

## Table of Contents

[[toc]]

## Additional Technologies

- [Vue.js](https://vuejs.org/)

## How to use

### Developer Widget

**Directions**

Go to the project directory in your consol.

```sh
cd D:pathtprojectdirectory/distanceWidget
```

Install project dependencies

```sh
npm install
```

Run locally

```sh
npm run dev
```

Or Build

```sh
npm run build
```

Package into web component

```sh
npm run singlewebcomponent
```

Alternatively you can use vue cli 3

[Vue cli](https://cli.vuejs.org/guide/)

## App Structure Overview

Bellow is the current structure of developer widget package

```
timeWidget/
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── assets/
│   │   └── logo.png
│   ├── components/
│   │   └── DeveloperControl.vue
│   ├── App.vue
│   └── main.js
├── .browserslistrc
├── .editorconfig
├── .eslintrc.js
├── .gitignore
├── babel.config.js
├── package.json
├── package-lock.json
├── postcss.config.js
└── README.md
```

### Important Files

| file                 | Contents                                               |
| -------------------- | ------------------------------------------------------ |
| DeveloperControl.vue | Contains the slideout component template               |
| App.vue              | Contains the view holder for the developer menu widget |
| main.js              | Standard vue file containing core render functions     |

### Developer Control Component

```vue
<template>
  <div class="sidenav" v-if="menuToggled === true" :class="[ menuToggled === true ? 'is-active' : '']">
    <a href="javascript:void(0)" class="closebtn" @click.prevent="toggleMenu">&times;</a>
    <h1 class="titleBlock">Destinations</h1>
    <a v-for="item in NavItems" :key="item.id" :href="item.link">{{item.destination}}</a>
  </div>
</template>

<script>
export default {
  name: "DeveloperControler",
  props: ["menuToggled", "NavItems"],
  methods: {
    toggleMenu() {
      this.$emit("toggleMenu");
    }
  }
};
</script>

<style scoped>
.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: blueviolet;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 1.2rem;
  color: #f1f1f1;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #000000;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

#main {
  transition: margin-left 0.5s;
  padding: 16px;
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}

.is-active {
  width: 250px;
}
.titleBlock {
  text-align: center;
  text-decoration: underline;
  color: black;
}
</style>
```

### Props

| Prop Name   | Use                                                                            |
| ----------- | ------------------------------------------------------------------------------ |
| menuToggled | Computed property that is used to determine the truthyness of the toggled menu |
| NavItems    | Holds array of navigation items                                                |

### Methods

| Method Name | Use                                                      |
| ----------- | -------------------------------------------------------- |
| toggleMenu  | Event bus method used to communicate with App.vue parent |

### App.vue

### Developer Control Component

```vue
<template>
  <div id="app">
    <dev-menu @toggleMenu="toggleMenu" :menuToggled="menuToggled" :NavItems="NavItems" />
    <button @click="toggleMenu">Dev Menu</button>
  </div>
</template>

<script>
import DeveloperControl from "@/components/DeveloperControl.vue";
export default {
  name: "app",
  data() {
    return {
      activeMenu: false,
      NavItems: [
        {
          link: "https://elegant-jackson-350189.netlify.com/",
          destination: "Developer Documents"
        },
        {
          link: "https://github.com/possibly1/DistanceCalc",
          destination: "Calculator Repository"
        },
        {
          link: "https://github.com/possibly1/distanceDocs",
          destination: "Docs Repository"
        },

        {
          link: "https://github.com/possibly1/distanceWidget",
          destination: "Widget Repository"
        }
      ]
    };
  },
  components: {
    "dev-menu": DeveloperControl
  },
  methods: {
    toggleMenu() {
      this.activeMenu = !this.activeMenu;
    }
  },
  computed: {
    menuToggled() {
      return this.activeMenu;
    }
  }
};
</script>

<style>
body {
  font-family: "Lato", sans-serif;
}
</style>
```

### Computed Properties

| Name        | Use                                                                            |
| ----------- | ------------------------------------------------------------------------------ |
| menuToggled | Computed property that is used to determine the truthyness of the toggled menu |

### Methods

| Method Name | Use                                                                          |
| ----------- | ---------------------------------------------------------------------------- |
| toggleMenu  | Method property that is used to determine the truthyness of the toggled menu |
