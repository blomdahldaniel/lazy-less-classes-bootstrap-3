# lazy-less-classes-bootstrap-3

My goal is to be as quick as possible while writing code.
I therefore have come up with some classes that speed things up when I make websites.

## Demo/Docs
Take a look at the demo and docs if you want to see it in action

[blomdahldaniel.github.io/lazy-less-classes-bootstrap-3](https://blomdahldaniel.github.io/lazy-less-classes-bootstrap-3/)

## Usage/Installation
##### If you use standard Bootstrap 3 colors
You can directly use the css files in the `dist` folder.

##### If you have your own set of colors/theme `@brand-*`
Just copy the lazy-less folder, paste it into your project (for example inside your bootstrap folder) and import the
all-my-lazy-stuff.less together with the bootstrap `variables.less` files.

Import together with the bootstrap stuff: (for example inside your `bootstrap.less` file)
```
// import the lazy-stuff
@import 'lazy-stuff/all-my-lazy-stuff';
```

## My lazy classes
* text color
* background color
* border color
* pointer class for `cursor: pointer;`

#### colors
What comes out of the box is all the color-classes that comes with Bootstrap 3:
* white
* black
* primary
* success
* info
* warning
* danger
* gray-ligther
* gray-light
* gray
* gray-dark
* gray-darker

#### hover effects
you can add a hover effects to the 3 elements. Simply write element-color-hover.

Example:

```
<div class="text-info text-success-hover">
  Lorem ipsum.
</div>
```

Will make a div with info-colored text and on hover it will turn green (success color).

#### Smart hover

Many times you dont want a different color on hover, you want a darkened version of the color.
Here the smart inheritance comes to play.

```
<div class="bg-info bg-hover">
  Lorem ipsum.
</div>
```

Will give me a div with the background-color info. And on hover, that background will be affected by the less
function `darken(@color, 10%);`

#### Quick cursor pointer
Many times if you ad a hover class to something you can want a pointer. Therefore, quicly add the `.pointer` class to your object to use that cursor.

This will add the following css: `cursor: pointer;`
```
<div class="bg-info bg-hover pointer">
  Lorem ipsum.
</div>
```

## Usage
###### cursor as pointer
* `.pointer` (adds css `cursor: pointer;`)

###### element-color
* `text-primary`
* `bg-success`
* `border-danger`
###### `element-color-hover`
* `text-primary-hover`
* `bg-success-hover`
* `border-danger-hover`

###### element-color
smart inheritance hover, color gets 10% darker.
* `text-primary text-hover`
* `bg-success bg-hover`
* `border-danger border-hover`
