let axios = require('axios');
let cheerio = require('cheerio');
const termModel = require("../models/termSchema");

const createTerm = async (title, desc, url) => {
    termModel.findOne({ title: title }, function (err, term) {
      if (err) console.log(err);
      if (term) console.log("This term already been created");
      else {
        var term = new termModel({
            title: title,
            description: desc,
            urlVideo : url,
            firstLetter: title.charAt(0)
        });
        term.save(function (err, example) {
          if (err) console.log(err);
          console.log("New term created!");
          return term;
        });
      }
    });
  };

const scrape = async () => {
    const page = await axios.get('https://www.bdo-academy.co.il/dictionary/')    
    const $ = cheerio.load(page.data); 
    $('p').each(function () {
        description = $(this).text();
        $('strong', this).each(function () {
            title = $(this).text();
            createTerm(title, description, "www");
        });
    });
};

module.exports = {
    scrape
};