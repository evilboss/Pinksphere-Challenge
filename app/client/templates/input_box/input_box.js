/*****************************************************************************/
/* InputBox: Event Handlers */
/*****************************************************************************/
Template.InputBox.events({
    'keypress input, click button': function (e) {
        var inputVal = $('.input-box_text').val();
        if (!!inputVal) {
            var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
            if (charCode == 13) {
                e.stopPropagation();
                Messages.insert({text: $('.input-box_text').val(), channel: Session.get('channel')});
                $('.input-box_text').val("");
                return false;
            }
        }
    }
});

/*****************************************************************************/
/* InputBox: Helpers */
/*****************************************************************************/
Template.InputBox.helpers({});

/*****************************************************************************/
/* InputBox: Lifecycle Hooks */
/*****************************************************************************/
Template.InputBox.onCreated(function () {
});

Template.InputBox.onRendered(function () {
});

Template.InputBox.onDestroyed(function () {
});
