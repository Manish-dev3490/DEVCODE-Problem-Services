function addProblem(req, res) {
    return res.status(501).json({
        msg:'Not implemented'
    });
}

function getProblem(req, res) {
    return res.status(501).json({
        msg:'Not implemented'
    });
}

function getProblems(req, res) {
    return res.status(501).json({
        msg:'Not implemented'
    });
}


function deleteProblem(req, res) {
    return res.status(501).json({
        msg:'Not implemented'
    });
}

function updateProblem(req, res) {
    return res.status(501).json({
        msg:'Not implemented'
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