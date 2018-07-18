
import commonService from './commonService'
var service  = {
    Giveg(data,success = null,fail = null,that= null){
        commonService.get("UserManagement/Giveg",data,success,fail,that);
    }
}

export default service;

