---
title: The Calculator
---

## Overview

The calculator package is the main project package, it is comprised of html, js, css, and its core functionality relies on no outside libraries. In addition to its core functionality the calculator application has vue developer menu web component embedded.

## Table of Contents

[[toc]]

## App Structure

Bellow is the current structure of the Distance Calculator Package.

```
public/
├── styles/
│   ├── style.css
│   └── debug.css
├── scripts/
│   ├── tests/
│   │    └── main.tests.js
│   ├── main.js
│   ├── dev-menu.js
│   ├── dev-menu.js.map
│   ├── dev-menu.min.js
│   └── dev-menu.min.js.map
├── index.html
└── styleDebug.html
```

| file            | Contents                                             |
| --------------- | ---------------------------------------------------- |
| index.html      | holds main application                               |
| styleDebug.html | holds main application with css debug mode activated |
| main.js         | holds main application's javascript                  |
| dev-menu.js     | holds compiled web component for hidden dev menu     |
| main.tests.js   | holds mockup unit tests vanilla js                   |

## How to use

### Frontent Application

**Directions**

Open _index.html_ file in your web browser.

Enter the first letters of your target **Departing airport** in the input box marked _from_, than choose from the available airports from the dropdown that appears. After that
enter the first letters of your target **Destination airport** in the input box marked _to_, than choose from the available airports from the dropdown that appears.

If succesfull the distance between the two airports will appear.

- [Repository](https://github.com/possibly1/xyzdocs)

### Frontent Application - Hidden Developer Menu

**Directions**

Open _index.html_ file in your web browser.

To activate the secret developer menu hidden in the frontend application type the following keys in order.

**UP, UP, DOWN, DOWN, LEFT, RIGHT, LEFT, RIGHT, B, A**

After that if succesfful the developer menu activation button will appear, click it to toggle the menu.

### Frontent Application - Style Debug View

**Directions**

Open _styleDebug.html_ file in your web browser or select Style Debug view from the hidden developer menu.

The style debug page features the page with clearly defined boarders to check for overlap.

## HTML Elements Overview

The html located in _index.html_ is what defines the structure for the frontend application.

### Important Frontend Elements

| Element           | TagName | Use                                                                                                           |
| ----------------- | ------- | ------------------------------------------------------------------------------------------------------------- |
| .hero             | section | Houses all of the elments within the frontend application, and has a image background                         |
| .hero-inner       | div     | Inner wrapper inside the main hero element, used to center interactive components horizontally and vertically |
| #devHolder        | div     | Holds the hidden developer menu toggle button, shown only when one enters the secret konami code              |
| .form-inline .btn | form    | Holds the form elements for the distance calculator, as well as results and feedback for form validation      |
| #feedBack         | p       | Used for form validation, shows message directing user in choosing correct form input                         |
| #from_airport     | input   | Used to prompt user to enter a departing airport                                                              |
| #to_airport       | input   | Used to prompt user to enter a destination airport                                                            |
| #distance         | p       | Upon correct airport selections displays distance between two airports                                        |

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

The javascript located in _scripts/main.js_ is what controls the inner workings of the frontend application.

### Variables

| Variable        | Use                                                              |
| --------------- | ---------------------------------------------------------------- |
| fakeFetchedData | Simulate web scraping of airport codes or information            |
| distanceTotal   | Placeholder for distance message                                 |
| feedbackMessage | Placeholder for feedback message                                 |
| intentChecked   | Simulate comparison of internal intent data vs fetched data from |
| currentFocus    | Currently Focused element from autocomplete values               |
| inputArray      | Holds input values                                               |
| from            | Used to validate departure form input                            |
| to              | Used to validate destination input                               |
| keySequence     | Contains running list of keypresses made by user                 |
| devMode         | Contains series of keys to press for unlocking developer mode    |
| resetArray      | Contains key to reset keySequence Array                          |

### Main Frontend Functions

| Function           | Arguments                                        | Use                                                  |
| ------------------ | ------------------------------------------------ | ---------------------------------------------------- |
| autocomplete       | user input, autocomplete array                   | handles autocompletion functionality                 |
| validateForm       | none                                             | validates user form input                            |
| travelListener     | Departure airport code, Destination airport code | Calculates distance between airports and appends     |
| feedBack           | Message to attach to input feedback              | Inform user throughout process                       |
| devToggle          | Itself                                           | Listens for correct key sequences                    |
| closeAllLists      | Clicked on element                               | Removes all other active lists from DOM              |
| addActive          | Current Active List                              | Adds active class to current list                    |
| removeActive       | Current Active List                              | Removes active class                                 |
| invokeAutocomplete | Target DOM Elements                              | Invokes autocomplete function on target DOM Elements |

### Isolated Code Snippets and tests

**main.tests.js**

```js
/* Define testing functions*/
function describe(text, fn) {
  console.log("FUNCTION", text);
  fn();
}

function it(text, fn) {
  console.log("DESCRIPTION", text);
  fn();
}

function expect(arg) {
  return {
    value: arg,
    toBe(arg) {
      if (arg === this.value) {
        console.log("TEST PASSED!");
      } else {
        console.log("TEST FAILED");
      }
    }
  };
}

/*Run Tests*/

//Function : completeChecker

function completeChecker(arrayItem, val) {
  if (arrayItem.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
    let autocompleteItem = document.createElement("DIV");
    autocompleteItem.innerHTML =
      "<strong>" + arrayItem.substr(0, val.length) + "</strong>";
    autocompleteItem.innerHTML += arrayItem.substr(val.length);
    autocompleteItem.innerHTML +=
      "<input type='hidden' value='" + arrayItem + "'>";
    autocompleteItem.addEventListener("click", function(e) {
      inp.value = this.getElementsByTagName("input")[0].value;
      // closeAllLists();
      // validateForm();
    });
    return autocompleteItem;
  }
}
//Test : completeChecker

describe("completeCheker", () => {
  it("returns a dom node if arguments match", () => {
    const item = "FAX";
    const value = "FA";
    const Actual = completeChecker(item, value);
    expect(Actual.nodeName).toBe("DIV");
  });
  it("returns undefined if arguments don't match", () => {
    const item = "abC";
    const value = "FA";
    const Actual = completeChecker(item, value);
    expect(Actual).toBe(undefined);
  });
});

//Function : invokeAutocomplete

function invokeAutocomplete(targetElements) {
  if (targetElements) {
    targetElements.forEach(function(input) {
      // autocomplete(input, intentChecked);
    });
    return targetElements;
  }
}
//Test : invokeAutocomplete

describe("invokeAutocomplete", () => {
  it("returns array if elements exist", () => {
    var elements = ["element"];
    const Actual = invokeAutocomplete(elements);
    expect(Actual.length).toBe(1);
  });
  it("returns undefined if elements don't exist on page", () => {
    var elements;
    const Actual = invokeAutocomplete(elements);
    expect(Actual).toBe(undefined);
  });
});
```

<iframe height='265' scrolling='no' title='distanceTests' src='//codepen.io/possibly1/embed/preview/LXJoWE/?height=265&theme-id=0&default-tab=js,result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/possibly1/pen/LXJoWE/'>distanceTests</a> by brad (<a href='https://codepen.io/possibly1'>@possibly1</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
