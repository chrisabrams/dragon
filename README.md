Paradigm
========

Single Page Apps with ES6

## Changes from Backbone to Paradigm

### General Changes
- No more `initialize()`. With ES6 classes, the `constructor()` is used directly.
- No more `.extend()` for extending a View, Model, etc. Instead, ES6 `class` and `extends` are used.
- `super()` is used, and is expected to be used by developers to call parent methods.

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
