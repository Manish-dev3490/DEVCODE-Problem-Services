function addProblem(req, res) {

}

function getProblem(req, res) {

}

function getProblems(req, res) {

}


function deleteProblem(req, res) {

}

function updateProblem(req, res) {

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