/* Manager/Supervisor - Controller Will Interact With The User and Handle Redirections:
    - Manages the incoming work HTTP requests
    - Decides which worker (service) should do the work
    - Splits up the work into sizable units
    - Does some checking/validation to figure out to which service(s) should the data from the request be sent to
    - Passes that work the necessary data from the HTTP requests off to the service(s)
    - But does not do the work himself/herself (the controller shouldn't be doing the entire work)
*/

const TermService = require("../services/termService");
const scrapeService =require("../services/scrapeService");


// Getting All Stocks From the Database - Really Needed?
exports.getAllTerms = async (req, res) => {
    var terms = await TermService.getAllTerms();
    try {
      res.send(terms);
    } catch (err) {
      res.status(500).send(err);
    }
  };
  
  // geting a specific term by name from db
  exports.getTermByName = async (req, res) => {
      var term = await TermService.getTermByName(req);
      try {
        res.send(term);
      } catch (err) {
        res.status(500).send(err);
      }
  };

  // geting all terms by first letter from db
  exports.getTermsByFirstLetter = async (req, res) => {
    var terms = await TermService.getTermsByFirstLetter(req);
    try {
      res.send(terms);
    } catch (err) {
      res.status(500).send(err);
    }
};

 // create new term
 exports.createTerm = async (req, res) => {
    var term = await TermService.createTerm(req);
    try {
      res.send(term);
    } catch (err) {
      res.status(500).send(err);
    }
};

// delete a specific term
exports.deleteTerm = async (req, res) => {
    var term = await TermService.deleteTerm(req);
    try {
      res.send(term);
    } catch (err) {
      res.status(500).send(err);
    }
};

// delete all terms by specific letter
exports.deleteTermsByLetter = async (req, res) => {
    var terms = await TermService.deleteTermsByLetter(req);
    try {
      res.send(terms);
    } catch (err) {
      res.status(500).send(err);
    }
};

// delete all terms by specific letter
exports.deleteTermsByLetter = async (req, res) => {
    var terms = await TermService.deleteTermsByLetter(req);
    try {
      res.send(terms);
    } catch (err) {
      res.status(500).send(err);
    }
};

 // update a specific term
 exports.updateTerm = async (req, res) => {
    var term = await TermService.updateTerm(req);
    try {
      res.send(term);
    } catch (err) {
      res.status(500).send(err);
    }
};

//import data from another page
exports.scrape = async () => {
  await scrapeService.scrape();  
};


exports.groupBy = async (req, res) => { 
 const data = await TermService.groupBy();
 res.send(data);
};

exports.mapReduce = async (req, res) => { 
  const data = await TermService.mapReduce();
  res.send(data);
 };

