const automationfunc = require ('../tests/automation-command-object');
const createEditDelete = automationfunc['CreateEditDeleteAutomation'];


module.exports = {
    'test create edit and delete'(browser){
        createEditDelete(browser,'borism','12345678*','NEW_MESSAGE','PUSH_WEB','hara','message',
                         'VISIT_ENDED','PUSH_APP','userOnline','titlealtered','messagealtered');
        createEditDelete(browser,'borism','12345678*','VISIT_ENDED','SMS','title2','message2',
                         'NEW_BU_RATING','PUSH_APP','userOffline','titlealtered','messagealtered');
    }
}
