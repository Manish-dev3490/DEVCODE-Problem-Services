const express=require('express');
const {ProblemController} =require('../../controllers/index');
const ProblemRouter=express.Router();

ProblemRouter.post("/",ProblemController.addProblem);
ProblemRouter.get("/",ProblemController.getProblems);
ProblemRouter.get("/ping",ProblemController.pingcontrollercheck);

ProblemRouter.get("/:id",ProblemController.getProblem);
ProblemRouter.delete("/:id",ProblemController.deleteProblem);
ProblemRouter.put("/:id",ProblemController.updateProblem);


module.exports=ProblemRouter;

