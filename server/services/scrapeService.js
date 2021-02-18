let axios = require('axios');
let cheerio = require('cheerio');
const termService = require('../services/termService');

const scrape = async () => {
    const page = await axios.get('https://www.bdo-academy.co.il/dictionary/')    
    const $ = cheerio.load(page.data); 
    console.log("here");   
    $('p').each(function () {
        description = $(this).text();
        console.log(description);
        $('strong', this).each(function () {
            title = $(this).text();
            console.log(title);
            termService.createTerm(title,description,"www");
             console.log("goooooooooooooooooooooooooooooooooood");
        });
    });
    
};

module.exports = {
    scrape
};