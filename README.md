# USPTO Design System: Theme
The USPTO's open source Design System V2.x theme, based on the United States Web Design System (USWDS) and Bootstrap v4.


## Installing
Install the project's dependencies with:
```
npm install

```
---

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
---


### Distribution Builds
After running `npm run build`, you will have an `assets` folder that contains the stylesheet and resources.

## Using the design theme

How you implement the design system depends on the needs of your project and your workstyle.

- **[Download the design theme](#download)**  to do

### Download

1. Download the [theme zip file](https://github.com/) .

   After extracting the zip file you should see the following file and folder structure:

   ```
   assets/
   ├── css/
   │   ├── usptostrap.min.css.map
   │   ├── usptostrap.min.css
   │   └── usptostrap.css
   ├── fonts/
   ├── img/
   ├── js/
   │   ├── uswds.js
   └── scss/

   ```

2. Copy these files and folders into a relevant place in your project's code base. Here is an example structure for how this might look:

   ```
   example-project/
   ├── assets/
   │   ├── uswds-2.8.0/
   │   ├── stylesheets/
   │   ├── images/
   │   └── javascript/
   └── index.html
   ```

   You'll notice in our example above that we also outline a `stylesheets`, `images` and `javascript` folder in your `assets` folder. These folders are to help organize any assets that are unique to your project and separate from the design system assets.

3. Reference the CSS and JavaScript files in each HTML page or dynamic templates in your project. We also provide Sass (.scss) files in the zip package which you can use to generate new CSS with project-specific settings. See [Sass and theme settings](#sass-and-theme-settings) for more information.

   Here is an example of how to reference these assets in your `index.html` file:

   ```html
   <!DOCTYPE html>
   <html>
     <head>
       <meta charset="utf-8" />
       <meta http-equiv="X-UA-Compatible" content="IE=edge" />
       <title>My Example Project</title>
       <link rel="stylesheet" href="assets/uswds-2.8.0/css/uswds.min.css" />
     </head>
     <body>
       <script src="assets/uswds-2.8.0/js/uswds.min.js"></script>
     </body>
   </html>
   ```

We offer both the CSS and the JavaScript in two versions — minified and un-minified. (In the examples above, we are using the minified files.) Use the minified files in a production environment or to reduce the file size of your downloaded assets. Use the un-minified files if you are in a development environment or would like to debug the CSS or JavaScript assets in the browser.

And that’s it — you should now be able to copy our code samples into your `index.html` and start using the design system.



## Disclaimer

The United States Department of Commerce (DOC) GitHub project code is provided on an "as-is" basis and the user assumes responsibility for its use. DOC has relinquished control of the information and no longer has responsibility to protect the integrity, confidentiality, or availability of the information. Any claims against the Department of Commerce stemming from the use of its GitHub project will be governed by all applicable Federal law. Any reference to specific commercial products, processes, or services by service mark, trademark, manufacturer, or otherwise, does not constitute or imply their endorsement, recommendation or favoring by the Department of Commerce. The Department of Commerce seal and logo, or the seal and logo of a DOC bureau, shall not be used in any manner to imply endorsement of any commercial product or activity by DOC or the United States government.

## Acknowledgments

* U.S. Web Design Standards (USWDS)
* Bootstrap 4 and bootstrap icons
* Material icons
* Google fonts
