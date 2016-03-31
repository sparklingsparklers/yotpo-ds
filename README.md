Yotpo Widget Design Specs.
========

Yotpo Design spec library is the UI library for Yotpo's widget.
The B2B and the Widget use it as a submodule.

###Steps to install the DS project:

1. After pulling run bundle install
2. This project usess Compass so run: 
  ```
compass watch .
```
3. When modifying CSS modify *ONLY* the SCSS file that are located in the sass/ dir.


###Stracture 

Compasss configuration is in ``config.rb``, most likely you dont need to touch it.
``sass/`` directory holds the CSS files, this are the files you need to edit. the Compass will generate CSS files out of this files.

``core.scss`` (loaded on the widget) - holds all the core CSS.
``custom_sprite_sheet.scss`` (loaded on the widget) - is only loaded is the user has customized the images (star,avatar etc.)

``ds.scss`` (not loaded on the widget) - is a CSS file for the DS pages

``general_rules.scss`` (loaded on the widget) - general rules for basic DOM elements (rules for all .yotpo .div etc.)

``mobile_rules.scss`` (loaded on the widget) - the name kinda says it dosent it?

``stylesheet.scss`` (on the widget) - is a CSS file for the DS pages

``variables.scss`` (loaded on the widget) - holds all difault variables, this variables will be over written by user settings in the actual widget.

``yotpo.scss`` (not loaded on the widget) - simulates the way the widget loads it CSS.





