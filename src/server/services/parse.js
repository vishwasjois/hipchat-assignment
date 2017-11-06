import fetch from 'node-fetch';
const jsdom = require('jsdom')
const { JSDOM } = jsdom;

export function parse(req, res){
  const pattern = {
    mentions: /\B@[a-z0-9_-]+/gi,
    emoticons: /\(\w+\)/gi,
    links: /(\b(https?|ftp|file|http?|www?):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig,
  };
  const url = 'https://cors-anywhere.herokuapp.com/';

  let mentions = [];
  let emoticons = [];
  let links = [];
  let linkObj = [];
  let p;
  let arr = [];

  mentions = req.body.data.match(pattern.mentions);
  emoticons = req.body.data.match(pattern.emoticons);
  links = req.body.data.match(pattern.links);
  if (links && links.length) {
    links.forEach((link) =>{
      p = new Promise((resolve, reject) => {
        fetch(url + link, {
          method: 'GET',
          headers: {
            Accept: 'text/html;charset=utf-8, text/plain, */*',
            'Accept-Encoding': 'gzip, deflate, br',
            'X-Requested-With': 'whatever-junk-value',
            'Content-Type': 'text/html;charset=utf-8',
          },
        })
          .then(response => response.text())
          .then((response) => {
            const dom = new JSDOM(response);
            let obj = {
              url: link,
              title: dom.window.document.title
            }
            linkObj.push(obj);
            resolve(linkObj);
          })
          .catch((error) => {
            reject(error);
          });
      });
      arr.push(p);
    })
  }

  Promise.all(arr).then(values => { 
    const requestBody = {
      mentions: mentions,
      emoticons: emoticons,
      links: linkObj,
      test: links,
    };
    res.json(requestBody);
  });
}
