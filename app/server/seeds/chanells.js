Channels.remove({});
var masterEmails = ['jr.evilboss@gmail.com', 'admiral@admiral.com', 'pink@pink.com', 'hassan@hassan.com'];
for (var masters in masterEmails) {

    var master = Meteor.users.findOne({emails: {$elemMatch: {address: masterEmails[masters]}}});
    if(master){
       console.log(master._id);
        Channels.insert({
            name:master.emails[0].address,
            master:master._id
        });
    }
}

/**
 * Created by evilboss on 8/23/15.
 */
