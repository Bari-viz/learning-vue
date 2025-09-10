const app = Vue.createApp({
	data() {
		return {
			name:"Gastt",
			enteredGoalValue: '',
			goals: []
			// goals: ['Learn Javascript', 'Learn Vue'] /
		};
	},
	methods: {
		addGoal(){
			this.goals.push(this.enteredGoalValue);

		},
		removeGoal(idx) {
			this.goals.splice(idx, 1);
			// what this does is it will find the element at this index amnd simply remove it from the goals array

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