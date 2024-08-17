const BaseError = require("./base-error");
const {StatusCodes}=require('http-status-codes');

class NotImplemented extends BaseError{
    constructor(methodname){
        super("NotImplemented",StatusCodes.NOT_IMPLEMENTED,`${methodname} Not Implemented`,{});
    }
}
module.exports=NotImplemented;