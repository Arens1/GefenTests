/**
 * Created by michaelarens on 3/19/17.
 */


const commsCommands = {
    validateForm() {
        return this.waitForElementVisible('@composeButton', 5000)
            .verify.visible('@composeButton')
            .verify.visible('@searchButton')
    },
    startConversation(){
        //const pageObj =
        return this.waitForElementVisible('@composeButton', 5000)
            .click('@composeButton')
            .waitForElementVisible('@addParticipantTextField', 3000)
        //this.api.pause(3000);
        //return pageObj;
    },
    openFirstConversation(){
        return this.waitForElementVisible('@firstConversationInList', 3000)
            .click('@firstConversationInList')
    },
    searchValue(searchedValue){
        return this.waitForElementVisible('@searchButton', 3000)
            .click('@searchButton')
            .waitForElementVisible('@searchTextField', 3000)
            .setValue('@searchTextField', searchedValue)
            .waitForElementVisible('@firstConversationInList', 3000)
    },
    searchParticipant(participant){
        return this.waitForElementVisible('@addParticipantTextField', 3000)
                .setValue('@addParticipantTextField', participant)
                .waitForElementVisible( '@selectParticipant', 10000)
                .click('@selectParticipant')
    },
    chooseParticipant(){
      return this.waitForElementVisible( '@selectParticipant', 3000)
          .click('@selectParticipant')
    },
    sendMessage(message){
        return this.waitForElementVisible('@newMessageTextField', 3000)
            .setValue('@newMessageTextField', message)
            .waitForElementVisible('@sendButton', 3000)
            .click('@sendButton')
            .waitForElementVisible('@lastChatText', 3000)
            .verify.containsText('@lastChatText', message)

    },
    addParticipantToGroup(groupParticipant){
        return this.waitForElementVisible('@addParticipantTextField', 3000)
            .click('@groupChatConversation')
            .api.pause(1000)
            .waitForElementVisible('@addParticipantButton', 3000)
            .click('@addParticipantButton')
            .waitForElementVisible('@addParticipantTextField', 3000)
            .setValue('@addParticipantTextField', groupParticipant)
            .waitforElementVisible('@selectParticipant', 3000)
            .click('@selectParticipant')
    },
    changeGroupSubject(groupName){
        return this.waitForElementVisible('@editButton', 3000)
            .click('@editButton')
            .waitForElementVisible('@editTextField', 3000)
            .setValue('@editTextField', groupName)
            .waitForElementVisible('@vButton', 3000)
            .click('@vButton')
            .waitForElementVisible('@groupChatSubject', 3000)
            .verify.containsText('@groupChatSubject', groupName)
    }
};

module.exports = {
    url() {
        return this.api.launchUrl;
    },
    commands: [commsCommands],
    elements: {
        composeButton: {
            selector: 'div[class="chat-sidebar"] div[class="ConversationsBar"] div[class="new-button"] div button'
        },
        addParticipantButton: {
            selector: 'div[class="actions"] button[class="add-par-button"]'
        },
        addParticipantBackButton: {
            selector: 'div[class"EditHeader"] button[class="add-par-button"]'
        },
        addParticipantTextField: {
            selector: 'div[class="EditHeader"] div[class="text-field"] div input[type="text"]'
        },
        selectParticipant: {
            selector: 'div[class="participant-item"]'
        },
        sendButton: {
            selector: 'div[class="send-button"] button[type="button"]'
        },
        searchButton: {
            selector: 'div[class="right-buttons"] button[type="button"]'
        },
        searchTextField: {
            selector: 'input[id="textf"]'
        },
        firstConversationInList: {
            selector: 'div[class="subject"]:nth-of-type(1)'
        },
        specificConversationOptionButton: {
            selector: 'div[class="actions-menu"] div:nth-of-type(1) button[type="button"]'
        },
        archiveButton: {
            selector: 'div[style="margin-left: 0px; padding: 0px 16px; position: relative;"]'
        },
        unArchiveBurtton: {
            selector: 'div[style="margin-left: 0px; padding: 0px 16px; position: relative;"]'
        },
        liveButton: {
            selector: 'div[style="margin-left: 0px; padding: 0px 16px; position: relative;"]'
        },
        conversationsArchiveButton: {
            selector: 'div[class="filters-menu"] div:nth-of-type(1) button[type="button"]'
        },
        editButton: {
            selector: 'div[class="ConversationSubject"] div[class="buttons"] button[type="button"]'
        },
        editTextField: {
            selector: 'input[class="subject-input"]'
        },
        vButton: {
            selector: 'div[class="ConversationSubject"] button[type="button"] div:nth-of-type(1)'
        },
        xButton: {
            selector: 'div[class="ConversationSubject"] button[type="button"] div:nth-of-type(2)'
        },
        lastChatText: {
            selector: 'span[class="Linkify"]'
        },
        groupChatConversation: {
            selector: 'div[style="background: url("https://s3-eu-west-1.amazonaws.com/gf.develop.mushkab/AvatarX1.png") center center / cover transparent;"]'
        },
        groupChatSubject: {
            selector: 'div[class="GroupHeader"] div[class="basic-header"] span'
        },
        newMessageTextField: {
            selector: 'div[class="text-area"] div div:nth-of-type(2) textarea[rows="1"]:nth-of-type(2)'
        }
    }
};