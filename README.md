# lazy-less-classes-bootstrap-3

My goal is to be as quick as possible while writing code.
I therefore have come up with some classes that speed things up when I make websites.

## My lazy classes
Affects:
* text color
* background color
* border color

#### colors
What comes out of the box is all the color-classes that comes with Bootstrap 3:
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

## Usage
###### `element-color`
* `text-primary`
* `bg-success`
* `border-danger`
###### `element-color-hover`
* `text-primary-hover`
* `bg-success-hover`
* `border-danger-hover`

###### `element-color`
smart inheritance hover, color gets 10% darker.
* `text-primary text-hover`
* `bg-success bg-hover`
* `border-danger border-hover`
