# www.toddsmells.com
### A sign-up for Simpsons-related MMS texts, GIFs, and trivia!

## Work Plan
### MVP
# Create database
User Table
* Unique ID
* Boolean opt in/out
* Phone number
* Name
* Birthday
* Special day hashtag 1
* Special day hashtag 2
* Email address
* Preferred message time

GIF Table
* Unique ID
* Path
* Description
* Boolean marker
* Times used
* Holiday/Special Hashtag 1
* Holiday/Special Hashtag 2
* Holiday/Special Hashtag 3
* Holiday/Special Hashtag 4
* Holiday/Special Hashtag 5

Trivia Table
* Unique ID
* Boolean marker
* Times used
* Question
* Answer
* Holiday/Special Hashtag 1
* Holiday/Special Hashtag 2
* Holiday/Special Hashtag 3
* Holiday/Special Hashtag 4
* Holiday/Special Hashtag 5

# Server
index.js

signup.js

# Client
index
* Graphic theme
* Site explanation
* Informational links
* Future features link

signup
* Phone number input
* Name input
* Birthday input
* Special day hashtag input 1
* Special day hashtag input 2
* Email address input
* Preferred message time input

#  Structure
```
├── /db
│  └── knex.js
├── /public
│  ├── /gifs
│  └── *.jpg
├── /routes
│  ├── index.js
│  └── signup.js
├── /views
│  ├── index.ejs
│  └── signup.ejs
├── knexfile.js
└── index.js
```