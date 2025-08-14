const app = Vue.createApp({
	data() {
		return {
			counter: 50,
			name: '',
			confirmedName: '',
			statusMsg: `You loaded this page on ${new Date().toLocaleString()}`,
		};
	},
	methods: {
        submitForm() {
            alert('Submitted!');
        },
        setName(event, lastName) {
            this.name = event.target.value + '' + lastName;
        },

		add(num) {
			this.counter += num;
		},

		reduce(num) {
			if (this.counter < 1) return;
			this.counter -= num;
		},
		confirmInput() {
			this.confirmedName = this.name;
			console.log(this.confirmedName);
		},
		submitForm() {
			alert('Submitted');
		},
	},
    watch: {
		counter(value) {
			if (value > 50) {
                const that = this;
                setTimeout(function (){

                    this.counter = 0;
                }, 2000);
			}
		}
	}
})

app.mount('#events')