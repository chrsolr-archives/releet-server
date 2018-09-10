'use strict';

const request = require('request-promise');
const cheerio = require('cheerio');
const { urls } = require('../configurations/settings');

exports.browse = {
  method: 'get',
  route: '/game',
  handler: async (req, res) => {
    try {
      const { page, letter } = req.query;

      if (letter === '0-9') {
        req.query.letter = '-';
      }

      const url = urls.browse_url(letter, page);

      const html = await request(url);

      const $ = cheerio.load(html);

      const root = $('.bl_la_main .divtext table');

      const rows = $(root).eq(0).find('tr[class]');

      const data = [];

      for (let i = 0; i < $(rows).length; i++) {
        const game = {
          title: $(rows).eq(i).find('strong').text().trim(),
          artwork_url: `${urls.base_url}${$(rows).eq(i).find('td a img').attr('src').replace('ico', 'cover').trim()}`,
          icon_url: `${urls.base_url}${$(rows).eq(i).find('td a img').attr('src').trim()}`,
          gamerscore: parseInt($(rows).eq(i).find('td[align]').eq(1).text().trim(), 10),
          permalink: $(rows).eq(i).find('a').eq(0).attr('href').trim().replace('/game/', '').replace('/achievements/', ''),
          achievement_amount: parseInt($(rows).eq(i).find('td[align]').eq(0).text().trim(), 10)
        };

        const link = game.artwork_url.replace(`${urls.base_url}/images/achievements/`, '').replace('/cover', '');
        game.game_id = parseInt(link.substr(0, link.indexOf('.')), 10);

        data.push(game);
      }

      return res.status(200).send(data);
    } catch (e) {
      return res.status(500).send(e);
    }
  }
};
