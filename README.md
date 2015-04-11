Dragon
========

## Hypothesis of project
What if Backbone were to be created today? What would the project look like? With ECMAScript 6, HTML5 pushState, Virtual DOM, new ways of data-binding, etc., front-end development has evolved. This project sets out to see what such an evolution would look like from scratch.

## Changes from Backbone to Dragon

### General Changes
- No more `initialize()`. With ES6 classes, the `constructor()` is used directly.
- No more `.extend()` for extending a View, Model, etc. Instead, ES6 `class` and `extends` are used.
- `super()` is used, and is expected to be used by developers to call parent methods.
- [io.js](https://iojs.org/en/index.html) is required for server-side usage.

### Mixins
- No more `.extend()` for mixing. Just use `Object.assign` directly.

### Models
- No more `.set()` and `.get()`; instead, just use the model's `attr` directly, as `'Object.observe'` is observing changes.
- No more `.has()`; just check for the property existence directly
- No more `.unset()`; just delete it directly.
- `.toJSON` actually returns JSON
- Currently previous/changed properties/methods are not implemented as they can be found in the changes array. Open to re-implementation.

### Views
- No more wrapping tags; views' DOM is 100% from template or attaching to existing DOM element(s)

## TODO

### Router
The router is inspired from Chapin.

- `match` is introduced; this assigns routes to a controller & action
- Objects in router can now be disposed.

### Dispatcher
The dispatcher is inspired from Chapin.

- Responsible for instantiating controller & action on matching route.

### Controllers
The controller is inspired from Chapin.

- Controllers have been added to provide MVC structure with the router.

### Views
- View, or "wrapping", tags don't exist. All HTML that represents the view is in the template itself.

## Mixin Ideas

### Models
- Delete/Unset that doesn't use `delete`
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
