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
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        msg: 'Not implemented'
    });
}

function getProblems(req, res, next) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        msg: 'Not implemented'
    });
}


function deleteProblem(req, res, next) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        msg: 'Not implemented'
    });
}

function updateProblem(req, res, next) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        msg: 'Not implemented'
    });
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