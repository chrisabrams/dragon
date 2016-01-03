# Dragon Change Log

## 0.2
- Replaced [Virtual DOM](https://github.com/Matt-Esch/virtual-dom) with [Incremental DOM](https://github.com/google/incremental-dom). Sorry to anyone hoping for issue https://github.com/chrisabrams/dragon/issues/7. Incremental DOM is much better at memory management than Virtual DOM (very important for mobile).
- View wrapping tags are back as it creates a cleaner interface with Incremental DOM (although you could technically get away without a wrapping tag).
- Templates now use [Starplate](https://github.com/littlstar/starplate). They're ES6 template strings that play nice with Incremental DOM. They are one of the templates [recommended by Google](https://github.com/google/incremental-dom#starplate) to be used with Incremental DOM. @chrisabrams subsequently became a contributor to Starplate after choosing them and Incremental DOM for Dragon 0.2.
- Dropped Object.observe as it's too flaky on changes (good write up [here](https://medium.com/@mweststrate/object-observe-is-dead-long-live-mobservable-observe-ad96930140c5#.wvmc6g2mx)). This will make the members of issue https://github.com/chrisabrams/dragon/issues/8 happy.
- Models now use ____ for observing changes

## Commits from 2014 & 2015
This project started out in 2014 as an exploration of writing ES6 projects and using Virtual DOM in non-React projects. It grew and some how found its way into Javascript Weekly, where pain points driving the project were validated:
- Belief that there is more than one way to manage the Virtual DOM, or how to write a client-side app without using React
- Memory management and app lifecycle is important, especially for single page apps running on mobile
- Views and templates should separate concerns
- Like Backbone, don't like JSX (or would prefer many other options before JSX)
- Backbone's router stinks
