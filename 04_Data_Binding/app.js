const app = Vue.createApp({
	data() {
		return {
			name:"",
			email:"",
			phone:"",
			address:"",
			lastName:"",
			middleName:"",
			carName:"",
		};
	},
	methods: {
        submitForm() {
            alert('Submitted!');
        },
		getLastName(e){
			this.lastName = e.target.value
		},
		getMiddleName(e){
			this.middleName = e.target.value
		},
		getCarName(e){
			this.carName = e.target.value
		}

	},
	// computed: {
	// 	fullName(){
	// 		this.name + this.lastName
	// 	}
	// },
	// watchers:{

	// }
})

app.mount('#events')