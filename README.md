<h1 align="center">
	<br>
	<img width="400" src="https://rawgit.com/aquibm/pyre-blog/master/pyre-logo.png" alt="pyre">
	<br>
	<br>
	<br>
</h1>

> An open source backend-less blog designed to leverage SaaS technologies like Firebase and Imgur.


### Table of Contents
- [Development Guide](#development-guide)
- [Firebase Schema](#firebase-schema)

-
### Development Guide

1. `npm install -g gulp bower`
2. Clone the project.
3. Run `npm install`
4. Run `bower install`
5. Run `tsd install`

Use `gulp serve` to view the blog locally.

-

### Firebase Schema
```javascript
  pyre: {
    lorem: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea corrupti, optio!"
    settings: {
      blogTitle: "Pyre",
      blogSummary: "An open source backend-less blog designed to leverage SaaS technologies like Firebase and Imgur."
    }
  }
```
