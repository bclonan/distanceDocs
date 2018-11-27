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
cd D:pathtprojectdirectory/timeWidget
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
    <a href="#">CSS Debug Mode</a>
    <a href="#">Documents</a>
    <a @click="toggleMenu" :class="[ menuToggled === 'developerMenu' ? 'is-large' : 'is-hidden']" aria-label="close">close</a>
  </div>
</template>

<script>
export default {
  name: "DeveloperControler",
  props: ["menuToggled"],

  methods: {
    toggleMenu() {
      this.$emit("toggleMenu");

      return;
    }
  }
};
</script>
```

### Props

| Prop Name   | Use                                                                            |
| ----------- | ------------------------------------------------------------------------------ |
| menuToggled | Computed property that is used to determine the truthyness of the toggled menu |

### Methods

| Method Name | Use                                                      |
| ----------- | -------------------------------------------------------- |
| toggleMenu  | Event bus method used to communicate with App.vue parent |

### App.vue

### Developer Control Component

```vue
<template>
  <div id="app">
    <dev-menu :menuToggled="menuToggled" @toggleMenu="toggleMenu" />
    <button @click="toggleMenu">Dev Menu</button>
  </div>
</template>

<script>
import DeveloperControl from "@/components/DeveloperControl.vue";
export default {
  name: "app",
  data() {
    return {
      activeMenu: false
    };
  },
  components: {
    "dev-menu": DeveloperControl
  },
  methods: {
    toggleMenu() {
      this.activeMenu = !this.activeMenu;
      return;
    }
  },
  computed: {
    menuToggled() {
      return this.activeMenu;
    }
  }
};
</script>
```

### Computed Properties

| Name        | Use                                                                            |
| ----------- | ------------------------------------------------------------------------------ |
| menuToggled | Computed property that is used to determine the truthyness of the toggled menu |

### Methods

| Method Name | Use                                                                          |
| ----------- | ---------------------------------------------------------------------------- |
| toggleMenu  | Method property that is used to determine the truthyness of the toggled menu |
