Dragon
========

Hypothesis: What if Backbone were created today, with ES 6&7, Virtual DOM, etc?

## Hypothesis of project
What if Backbone were to be created today? What would the project look like? With ECMAScript 6 & 7, HTML5 pushState, Virtual DOM / Incremental DOM / etc., new ways of data-binding, etc., front-end development has evolved. This project sets out to see what such an evolution would look like from scratch.

## Changelog
See the [change log](https://github.com/chrisabrams/dragon/blob/0.2/CHANGELOG.md).

## Changes from Backbone to Dragon

### General Changes
- ES6 classes and ES7 class properties.
- No more `.extend()` for extending a View, Model, etc. Instead, ES6 `class` and `extends` are used.
- `super()` is used, and is expected to be used by developers to call parent methods.

### Collections
- Collections use the base Model by default instead of whining about not having a Model

### Mixins
- No more `.extend()` for mixing. Just use `Object.assign` directly.

### Models
- No more `.set()` and `.get()`; instead, just use the model's `attr` directly, as `'Object.observe'` is observing changes.
- No more `.has()`; just check for the property existence directly
- No more `.unset()`; just delete it directly.
- `.toJSON` actually returns JSON
- Currently previous/changed properties/methods are not implemented as they can be found in the changes array. Open to re-implementation.

### Views
- Use Incremental DOM for quick patching of DOM changes. This makes a wrapping tag required.
- Templates now managed by Starplates

### Router
The router is inspired from Chaplin.

- Objects in router can now be disposed, which has always been a bane for Backbone's router.

### Controllers
The controller is inspired from Chaplin.

- Controllers have been added to provide MVC structure with the router.

### Dispatcher
The dispatcher is inspired from Chaplin.

- Responsible for instantiating controller & action on matching route.

## TODO

## Mixin Ideas

### Models
- Delete/Unset that doesn't use `delete`
- LocalStorage
- Pagination
- Schemas
- Undo/Redo
- Validation

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

### Other
- Redux integration
