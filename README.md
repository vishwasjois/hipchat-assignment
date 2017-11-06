This respo was put up as apart of an assignment submission. 
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app)

Running the applicarion : 
./start.sh 

Access UI  : 
localhost:3000

Problem statement : 

Your service should parse the following data from the input:
1. mentions - A way to mention a user. Always starts with an '@' and ends when hitting a non-word character.

2. Emoticons - For this exercise, you only need to consider 'custom' emoticons which are alphanumeric strings, no longer than 15 characters, contained in parenthesis. You can assume that anything matching this format is an emoticon. (https://www.hipchat.com/emoticons)

3. Links - Any URLs contained in the message, along with the page's title. (We recommend https://cors-anywhere.herokuapp.com/ as a work-around for CORS errors)
  
The output should be a JSON object containing arrays of all matches parsed from the input string, displayed in the UI.
For example, entering the following text should result in the corresponding outputs.

Input: "@chris you around?"
Output:
{
  "mentions": [
    "chris"
  ],
  "emoticons": [],
  "links": []
}
Input: "Good morning! (megusta) (coffee)"
Output:
{
  "mentions": [],
  "emoticons": [
    "megusta",
    "coffee"
  ],
  "links": []
}
 
Input: "Olympics are starting soon; http://www.nbcolympics.com"
Output:
{
  "mentions": [],
  "emoticons": [],
  "links": [
    {
      "url": "http://www.nbcolympics.com",
      "title": "2018 PyeongChang Olympic Games"
    }
  ]
}
 
Input: "@bob @john (success) such a cool feature; https://twitter.com/jdorfman/status/430511497475670016"
Output:
{
  "mentions": [
    "bob",
    "john"
  ],
  "emoticons": [
    "success"
  ],
  "links": [
    {
      "url": "https://twitter.com/jdorfman/status/430511497475670016",
      "title": "Justin Dorfman on Twitter: &quot;nice @littlebigdetail from @HipChat (shows hex colors when pasted in chat). http://t.co/7cI6Gjy5pq&quot;"
    }
  ]
}
