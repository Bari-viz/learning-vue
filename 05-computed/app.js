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
	// 	    // return	this.name + '  '+ this.lastName;
    //         return `${this.name}  ${this.lastName}`
    // 	},
    //     fullNameCharacterLength(){
    //         return this.fullName.length
    //     }
	// },
	watch:{
        // name(value) {
        //     if (value == '') {
        //         this.fullname = '';
        //     } else {

        //         this.fullname = value + '' + this.lastName;
        //     }

        phone(newValue, oldValue){
            console.log(`Phone's new value is ${newValue}, while old value is ${oldValue}`)
        }
   }
})

app.mount('#events')