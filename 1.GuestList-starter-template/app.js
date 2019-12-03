var vm1 = new Vue({
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
       
        eventCapacity: 25,
        eventCapacityPercentage: 0
        
    },
    methods: {
        formSubmitted: function() {
            if(this.newNameText.length > 0 && this.eventCapacityPercentage < 100) {
                this.guestName.push(this.newNameText);
                this.newNameText = '';
                this.eventCapacityPercentage = this.guestName.length / (this.eventCapacity / 100);
                
            }
        }
    },
    computed: {
        sortNames: function() {
            return this.guestName.sort();
        }
    },
    filters: {
        toUpper: function(value) {
            return value.toUpperCase();
        },
        formatName: function(value) {
            return value.slice(0, 1).toUpperCase() + value.slice(1).toLowerCase();
        }
    }
});

var vm2 = new Vue({
    el: "#navigation",
    data: {
        appName: 'Guest List',
        navLinks: [
            {name: 'Home', id: 1, url: "https://google.com"},
            {name: 'Upcoming events', id: 2, url: "https://yandex.ru"},
            {name: 'Guest Benefits', id: 3, url: "https://mail.ru"},
            {name: 'Latest News', id: 4, url: "https://ixbt.com"}
        ]
    },
    methods: {
        capacityChanged: function() {
            vm1.eventCapacity = 15;
        }
    }
});

var vm3 = new Vue({
    template: '<div class="col-sm-12 text-center"><h1>Guest List</h1></div>'
});

vm3.$mount('#navigation');