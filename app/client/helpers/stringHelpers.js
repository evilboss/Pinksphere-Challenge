Template.registerHelper('truncate', function (string, length) {
    var cleanString = _(string).stripTags();
    return _(cleanString).truncate(length);
});
Template.registerHelper("usernameFromId", function (userId) {
    var user = Meteor.users.findOne({_id: userId});
    if (typeof user === "undefined") {
        return "Anonymous";
    }
    if (typeof user.services.github !== "undefined") {
        return user.services.github.username;
    }
    return user.username;
});
Template.registerHelper("timestampToTime", function (timestamp) {
    var date = new Date(timestamp);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    return hours + ':' + minutes.substr(minutes.length - 2) + ':' + seconds.substr(seconds.length - 2);
});
Template.registerHelper("userEmail", function () {
    return Meteor.user().emails[0].address;
});


Template.registerHelper("userEmailFromId", function (userId) {
    var user = Meteor.users.findOne({_id: userId});
    return user.emails[0].address;
});

Template.registerHelper("isUserMaster", function () {
    var masterEmails = ['jr.evilboss@gmail.com', 'admiral@admiral.com', 'pink@pink.com', 'hassan@hassan.com'];
    var userMail = Meteor.user().emails[0].address;
    for (var masters in masterEmails) {
        if (masterEmails[masters] == userMail) {
            return true;
        }

    }
    return false;

});