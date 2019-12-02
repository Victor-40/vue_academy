new Vue({
    el: '#app',
    data: {
        event: {
            eventDate: 'August 14th - 16th',
            eventTitle: 'Summer Festival!',
            eventDescription: "It's back! This years summer festival will be in the beautiful countryside featuring our best line up ever!",
            eventSignUpText: 'Add your name to the guest list for <em>exclusive</em> offers:'
        },
        newNameText: '',
        guestName: [],
        appStyles: {
            marginTop: '25px'
        }
        
    },
    methods: {
        formSubmitted: function() {
            if(this.newNameText.length > 0) {
                this.guestName.push(this.newNameText);
                this.newNameText = '';
                
            }
        }
    }
});