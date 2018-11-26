---
title: Documents
---

## Overview

...

## Table of Contents

[[toc]]

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

| file   | Contents                                |
| -------- | ------------------------------------- |
| favicon.ico | |
| index.html |  |
| logo.png ||
| config.js | |
| enhanceApp.js | |
| Calculator.md | |
| Developer.md | |
| Docs.md | |
| guide/READEME.md | |
| docs/READEME.md | |
| .gitignore | |
| package.json | |
| package-lock.json | |


## How to use

### Frontent Application

**Directions**

Open *index.html* file in your web browser.

Enter the first letters of your target **Departing airport** in the input box marked *from*, than choose from the available airports from the dropdown that appears. After that
enter the first letters of your target **Destination airport** in the input box marked *to*, than choose from the available airports from the dropdown that appears.

If succesfull the distance between the two airports will appear.


- [Repository](https://github.com/possibly1/xyzdocs)

### Frontent Application - Hidden Developer Menu

**Directions**

Open *index.html* file in your web browser.

To activate the secret developer menu hidden in the frontend application type the following keys in order.

**UP, UP, DOWN, DOWN, LEFT, RIGHT, LEFT, RIGHT, B, A**

After that if succesfful the developer menu activation button will appear, click it to toggle the menu.

### Frontent Application - Style Debug View

**Directions**

Open *styleDebug.html* file in your web browser or select Style Debug view from the hidden developer menu.

The style debug page features the page with clearly defined boarders to check for overlap.

## HTML Elements Overview

The html located in *index.html* is what defines the structure for the frontend application. 

### Important Frontend Elements

| Element   | TagName                              | Use                                |
| -------- | ------------------------------------- | ------------------------------------- |
| .hero | section |Houses all of the elments within the frontend application, and has a image background |
| .hero-inner | div | Inner wrapper inside the main hero element, used to center interactive components horizontally and vertically |
| #devHolder| div | Holds the hidden developer menu toggle button, shown only when one enters the secret konami code|
| .form-inline .btn | form | Holds the form elements for the distance calculator, as well as results and feedback for form validation|
|#feedBack| p |Used for form validation, shows message directing user in choosing correct form input|
|#from_airport| input |Used to prompt user to enter a departing airport|
|#to_airport| input |Used to prompt user to enter a destination airport|
|#distance| p |Upon correct airport selections displays distance between two airports|

### Frontend Code Snippet

```html
<section class="hero">
  <div class="hero-inner">
    <div id="devHolder" class="hideMenu">
      Developer Menu
      <dev-menu></dev-menu>
    </div>
    <h1>Distance Travel Calculator</h1>
    <h2>Choose your Airports and find out the distance</h2>
    <form class="form-inline btn" autocomplete="off" name="distanceForm">
      <p id="feedBack">
      </p>
      <label for="from_airport">From:</label>
      <div class="dropdown">
        <div class="autocomplete dropdown">
          <input id="from_airport" type="text" name="from_airport" placeholder="Airport Code"
            class="selectInput airport_input">
        </div>
      </div>
      <label for="to_airport">To:</label>
      <div class="dropdown">
        <div class="autocomplete dropdown">
          <input id="to_airport" type="text" name="to_airport" placeholder="Airport Code"
            class="selectInput airport_input">
        </div>
      </div>
      <p id="distance">
      </p>
    </form>
  </div>
</section>
```

## Javascript Overview

The javascript located in *scripts/main.js* is what controls the inner workings of the frontend application. 

### Variables

| Variable   | Use                                |
| -------- | ------------------------------------- |
| fakeFetchedData | Simulate web scraping of airport codes or information |
| distanceTotal | Placeholder for distance message |
|feedbackMessage| Placeholder for feedback message |
|intentChecked | Simulate comparison of internal intent data vs fetched data from  |
|currentFocus  | Currently Focused element from autocomplete values  |
| inputArray  | Holds input values |
| from | Used to validate departure form input |
| to | Used to validate destination input  |
|keySequence| Contains running list of keypresses made by user|
|devMode| Contains series of keys to press for unlocking developer mode|
|resetArray| Contains key to reset keySequence Array|

### Main Frontend Functions

| Function   | Arguments                              | Use                                |
| -------- | ------------------------------------- | ------------------------------------- |
| autocomplete | user input, autocomplete array  | handles autocompletion functionality |
| validateForm | none | validates user form input|
| travelListener| Departure airport code, Destination airport code | Calculates distance between airports and appends|
| feedBack | Message to attach to input feedback | Inform user throughout process|
| devToggle | Itself | Listens for correct key sequences|

### Isolated Code Snippets and tests

```js

```