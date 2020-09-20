new Vue({
        el: '#exercise',
        data: {
            value1: '',
            value2: ''
        },
        methods: {
            showAlert: function () {
                alert('Alert!');
            },
            onInput1: function ($event) {
                console.log($event)
                value1 = $event.target.value;
            },
            onInput2: function ($event) {
                value2 = $event.target.value;
            }
        }
    });
