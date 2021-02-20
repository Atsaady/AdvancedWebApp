/* Worker - Service Will take care of the hard work and the business logic:
    - Handle CRUD Operations
    - Fetching Data From DB 
    - Will execute and run algorithms
    - Receives the request data it needs from the manager in order to perform its tasks
    - Is generally only concerned with the tasks he/she has to complete
    - Not responsible for making decisions about the "bigger" picture orchestrating the different service calls
    - Returns the completed work a response to the manager (Controller)
*/
const { emit } = require("../models/termSchema");
const termModel = require("../models/termSchema");

const createTerm = async (req) => {
  console.log(req.body);
  termModel.findOne({ title: req.body.termName }, function (err, term) {
    if (err) console.log(err);
    if (term) console.log("This term already been created");
    else {
      var term = new termModel({
          title: req.body.termName,
          description: req.body.des,
          firstLetter: req.body.fl
      });
      term.save(function (err, example) {
        if (err) console.log(err);
        console.log("New term created!");
        return term;
      });
    }
  });
};

const updateTerm = async (req) => {
  console.log(req.body);
  var termToChange = req.body.term;
  var name = req.body.termName;
  var des = req.body.des;
  var fl = req.body.fl;
  termModel.updateOne({ title: termToChange}, {title: name, description: des, firstLetter: fl}, function (err, term) {
    if (err) console.log(err);
    console.log("TERM UPDATED");
    return term;
  });
};

const deleteTerm = async (req) => {
  var query = req.params.termName;
  console.log(query);
  termModel.deleteOne({ title: query }, (err, doc) => {
    if (err) {
      console.log("Something wrong when deleting data!");
    }
    console.log("Term deleted");
  });
};

const deleteTermsByLetter = async (req) => {
  var query = req.body.firstLetter;
  termModel.deleteMany({ firstLetter: query }, (err, doc) => {
    if (err) {
      console.log("Something wrong when deleting data!");
    }
    console.log("Terms deleted by letter");
  });
};

const getTermByName  = async (req) => {
  console.log("here")
  var query = req.body.title;
  const term = await termModel.findOne({ title: query }, (err, doc) => {
    if (err) {
      console.log("Something wrong when getting data!");
    }
});
console.log(term);
return term;
};

const getTermsByFirstLetter  = async (req) => {
 
  const query = req.body.firstLetter;
  const term= await termModel.find({firstLetter: query});
console.log(term);
return term;
};

const getAllTerms = async () => {
  const terms = await termModel.find({});
  return terms;
};

const groupBy = async () => {
  const data = await termModel.aggregate([{
    $group : {
      _id : "$firstLetter",
      total: {$sum : 1}
    }

  }]); 
  return data;
}


const mapReduce = async () => {

  console.log("hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")

  var data = termModel.mapReduce(
    function(){emit(this.title, 3);},
    function(key, value) {
      var result = {};
      result.titles = value;
      console.log(result)
      return result;
    },
    {
      out: {inline: 1}
    }
  )
  // console.log(data)
  // return data;

// console.log("hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
//  function map () {emit(termModel.title, termModel.firstLetter)};
//  function reduce(key,values) {return Array.sum(values)};
//  const data  = termModel.mapReduce(map,reduce,{out:{inline:1}});
//  console.log("hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
// console.log(data)
//   return data;
}



module.exports = {
  getAllTerms,
  getTermByName,
  getTermsByFirstLetter,
  createTerm,
  deleteTerm,
  deleteTermsByLetter,
  updateTerm,
  groupBy,
  mapReduce
};
