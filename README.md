# USPTO Design System Base Theme v2.x (usptostrap)
The USPTO's Design System Theme, an open source design library based on the United States Web Design System (USWDS) and Bootstrap 4.

This theme library is currently in Beta and we welcome your [feedback](https://github.com/USPTO/USPTO-DS-Theme/issues)!

## Installing
Install the project's dependencies with:
```
npm install

```
----

## Building & running locally
This project can be built with SASS.

To build the front-end assets (Fonts/CSS/JS) use:
```
npm run build
```

To watch sass files while making changes in local use:
```
npm run dev
```
----

## Using the USPTO Design System

How you implement the USPTO Design System depends on the needs of your project.

### (Preferred) As a dependency within NPM:
Add the following to your package.json file:
```
"dependencies": {
  "bootstrap": "^4.5.0",
  "usptostrap": "^2.0.1"
  }
```
Adding directly
```
npm install usptostrap
```

### (Alternative) Add the precompiled theme to your site or application:
```
<!-- USPTO v2.x Base Theme - Note: This already includes Bootstrap 4 -->
<link rel="stylesheet" href="assets/css/usptostrap.css">
<!-- Optional libraries -->
<link rel="stylesheet" href="assets/css/uswds-combobox.css">
<link rel="stylesheet" href="assets/css/uswds-datepicker.css">
<link rel="stylesheet" href="assets/css/uswds-overrides.css">
<style>
```

----

## Disclaimer

The United States Department of Commerce (DOC) GitHub project code is provided on an "as-is" basis and the user assumes responsibility for its use. DOC has relinquished control of the information and no longer has responsibility to protect the integrity, confidentiality, or availability of the information. Any claims against the Department of Commerce stemming from the use of its GitHub project will be governed by all applicable Federal law. Any reference to specific commercial products, processes, or services by service mark, trademark, manufacturer, or otherwise, does not constitute or imply their endorsement, recommendation or favoring by the Department of Commerce. The Department of Commerce seal and logo, or the seal and logo of a DOC bureau, shall not be used in any manner to imply endorsement of any commercial product or activity by DOC or the United States government.

----

## Acknowledgments

* U.S. Web Design Standards (USWDS)
* Bootstrap 4 and bootstrap icons
* Material icons
