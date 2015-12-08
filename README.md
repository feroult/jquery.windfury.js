jquery.windfury.js
========================================

Windfury Template jQuery Plugin

[![Build Status](https://travis-ci.org/renatoferreira656/jquery.windfury.js.png?branch=master)](https://travis-ci.org/renatoferreira656/jquery.windfury.js)

Description
========================================
Windfury is a simple web framework, which main focus is to help developers to organize their front-end code in components. Working with components helps to isolate the responsibility of each part of the app and thus enhance its legibility, reutilization and maintainability.

Getting Started
========================================

This is a simple example of a [single page html](./src/main/webapp/sample.html) to show Windfury in action.

_This is only to exemplify a complete workflow of the framework, keep in mind that we may have a lot of different app structures using the same Windfury APIs._

Inside the page __<head>__ tag, we can find a reference to the [main javascript](./src/main/webapp/js/main.js), which is
a example of how to use Windfury with a hashchange trigger. The script considers that all pages will be available inside
the __/page__ folder and they will export an API function called __"open"__.

The main page of the app is called [Main.html](./src/main/webapp/page/Main.html) and it is composed by two Windfury
components which are available in the __/comp__ folder. Both components can be found [here](./src/main/webapp/comp).

Extras information
========================================

Need help? Don't be afraid in contacting us, just checkout the developers emails on our github page.
If you found some issues feel free to contact us or open the issue , it will be a great help.

### Below there are some links that might help:
  - [API Documentation](http://renatoferreira656.github.io/jquery.windfury.js/page/api.html)
  - [jquery.windfury.js latest release](https://github.com/renatoferreira656/jquery.windfury.js/releases/tag/1.1.0)
  - [jquery.windfury.js file code](https://github.com/renatoferreira656/jquery.windfury.js/blob/1.1.0/src/main/webapp/js/jquery.windfury.js)
