import request from 'supertest-as-promised';
import app from './server';

const appi = new app().express;

describe('POST /api/parse/message ', () => {
    let message = {
      action: 'parse',
      data: '@bob @john (success) such a cool feature; https://twitter.com/jdorfman/status/430511497475670016'
    };
    it('API success flow test', () => {
      return request(appi).post('/api/parse/message')
      .send(message)
      .then((res) => {
        expect(res.body.status).toBe(200);
        expect(res.body.message).toBe('Success!');
        return res.body;
      })
      .then((res) => {
        let returnedPeach = res.body;
        expect(res.status).toBe(200);
        expect(returnedPeach.mentions.length).toBe(2);
        expect(returnedPeach.links.length).toBe(1);
        expect(returnedPeach.links[0].url).toBe('https://twitter.com/jdorfman/status/430511497475670016');
        expect(returnedPeach.links[0].title).toBe('Justin Dorfman on Twitter: &quot;nice @littlebigdetail from @HipChat (shows hex colors when pasted in chat). http://t.co/7cI6Gjy5pq&quot;');
        expect(returnedPeach.emoticons.length).toBe(1);
      });
    });
});