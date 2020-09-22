new Vue({
    el: '#exercise',
    data: {
        myClass: '',
        interval: null,
        insertedClass: '',
        insertedClass2: '',
        extraClass: 'custom-margin',
        extraClassInput: '',
        extraClassCheck: false,
        userStyle: '',  // e.g. {width: 50 + 'px'}
        progressWidth: 0,
        progressInterval: null
    },
    computed: {},
    methods: {
        startEffect: function () {
            var vm = this;
            if (!this.interval) {
                this.interval = setInterval(function () {
                    console.log('antes ' + vm.myClass);
                    // vm.myClass = 'highlight';

                    vm.myClass === 'highlight' ? vm.myClass = 'shrink' : vm.myClass = 'highlight';
                    console.log('después ' + vm.myClass);
                }, 500);
            }
        },
        stopEffect: function () {
            clearInterval(this.interval);
            this.interval = null;
        },
        checkExtraClass: function () {
            this.extraClassCheck = this.extraClassInput === 'true';
        },
        checkStyle: function () {
            console.log(this.userStyle);
        },
        startProgress: function () {
            this.progressWidth = 0;
            if (!this.progressInterval) {
                let vm = this;
                vm.progressInterval = setInterval(function () {
                    vm.progressWidth += 10;
                    if (vm.progressWidth === 100) {
                        clearInterval(vm.progressInterval);
                        vm.progressInterval = null;
                    }
                }, 100);
            }
        }
    }
});
