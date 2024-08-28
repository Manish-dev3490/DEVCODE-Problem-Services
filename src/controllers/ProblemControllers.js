const { StatusCodes } = require('http-status-codes');
const notImplemented = require('../Errors/notImplemented')

function addProblem(req, res, next) {
    try {
        throw new notImplemented('addProblem');

    }
    catch (error){
        next(error);
    }

}

function getProblem(req, res, next) {
     try {
        throw new notImplemented('getProblem');

    }
    catch (error){
        next(error);
    }
}

function getProblems(req, res, next) {
   try {
        throw new notImplemented('getProblems');

    }
    catch (error){
        next(error);
    }
}


function deleteProblem(req, res, next) {
    try {
        throw new notImplemented('deleteProblem');

    }
    catch (error){
        next(error);
    }
}

function updateProblem(req, res, next) {
     try {
        throw new notImplemented('updateProblem');

    }
    catch (error){
        next(error);
    }
}
function pingcontrollercheck(req, res) {
    res.json({ msg: "ping controller check is working " });
}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingcontrollercheck
}