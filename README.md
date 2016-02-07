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
	    lorem: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea corrupti, optio!",
	    settings: {
	      	blogTitle: "Pyre",
	      	blogSummary: "An open source backend-less blog designed to leverage SaaS technologies like Firebase and Imgur."
	    },
	    aboutPage: {
			title: "About",
			content: "![Pyre Logo](https://rawgit.com/aquibm/pyre-blog/master/pyre-logo.png)\n\n> An open source backend-less blog designed to leverage SaaS technologies like Firebase and Imgur.\n\n---\n\n\n### Table of Contents\n- [Development Guide](#development-guide)\n- [Firebase Schema](#firebase-schema)\n\n---\n\n### Development Guide\n\n1. `npm install -g gulp bower`\n2. Clone the project.\n3. Run `npm install`\n4. Run `bower install`\n5. Run `tsd install`\n\nUse `gulp serve` to view the blog locally.\n\n---\n\n\n### Firebase Schema\n```javascript\n\tpyre: {\n\t    lorem: \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea corrupti, optio!\",\n\t    settings: {\n\t      \tblogTitle: \"Pyre\",\n\t      \tblogSummary: \"An open source backend-less blog designed to leverage SaaS technologies like Firebase and Imgur.\"\n\t    },\n\t    aboutPage: {\n\t\t\ttitle: \"About\",\n\t\t\tcontent: \"![Pyre Logo](https://rawgit.com/aquibm/pyre-blog/master/pyre-logo.png)  > An open source backend-less blog designed to leverage SaaS technologies like Firebase and Imgur.  ---   ### Table of Contents - [Development Guide](#development-guide) - [Firebase Schema](#firebase-schema)  ---  ### Development Guide  1. `npm install -g gulp bower` 2. Clone the project. 3. Run `npm install` 4. Run `bower install` 5. Run `tsd install`  Use `gulp serve` to view the blog locally.  ---   ### Firebase Schema ``` js pyre: {     lorem: \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea corrupti, optio!\",     settings: {       \tblogTitle: \"Pyre\",       \tblogSummary: \"An open source backend-less blog designed to leverage SaaS technologies like Firebase and Imgur.\"     },     aboutPage: { \t\ttitle: \"About\", \t\tcontent: \"\", \t\tlastModified: \"2016-02-06T04:17:10.705Z\" \t} }\t ```\",\n\t\t\tlastModified: \"2016-02-06T04:17:10.705Z\"\n\t\t}\n\t}\n```",
			lastModified: "2016-02-06T04:17:10.705Z"
		}
  	}
```
