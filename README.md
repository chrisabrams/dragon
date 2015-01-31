Paradigm
========

## Hypothesis of project
What if Backbone were to be created today? What would the project look like? With ECMAScript 6, HTML5 pushState, Virtual DOM, new ways of data-binding, etc., front-end development has evolved. This project sets out to see what such an evolution would look like from scratch.

## Changes from Backbone to Paradigm

### General Changes
- No more `initialize()`. With ES6 classes, the `constructor()` is used directly.
- No more `.extend()` for extending a View, Model, etc. Instead, ES6 `class` and `extends` are used.
- No more `.extend()` for mixing. Just use `Object.assign` directly.
- `super()` is used, and is expected to be used by developers to call parent methods.

### Mixins
Mixins come with the box.

### Router
The router in Paradigm is inspired from Chapin.

- `match` is introduced; this assigns routes to a controller & action
- Objects in router can now be disposed.

### Dispatcher
The dispatcher in Paradigm is inspired from Chapin.

- Responsible for instantiating controller & action on matching route.

### Controllers
The controller in Paradigm is inspired from Chapin.

- Controllers have been added to provide MVC structure with the router.

### Views
- View, or "wrapping", tags don't exist. All HTML that represents the view is in the template itself.

## Mixin Ideas

### Models
- LocalStorate
- Pagination
- Schemas
- Undo/Redo
- Validation
- WebSQL

### Views
- Collection View
- Composition
- Infinite Scroll
- Media Queries
- Regions
- Selector Store (cache reference to selector in view template)
- Transitions
  - afterEnter
  - beforeEnter
  - beforeEnter('someOtherView')
- View States (beforeRender, afterRender, etc..)
- Visibility (would mainly be useful with media query states)
