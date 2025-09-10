const app = Vue.createApp({
	data() {
		return {
			name:"Gastt",
			enteredValue: '',
			tasks: [],
            taskListIsVisible: true,
			showName: false,
		};
	},
    computed: {
        buttonCaption() {
            return this.taskListIsVisible ? 'Hide List' : 'Show List';
        }
    },
	methods: {
		toggleShowName(){
			this.showName = !this.showName
		},
		addTask() {
			this.tasks.push(this.enteredValue);

		},
		toggleTaskList() {
            this.taskListIsVisible = !this.taskListIsVisible;
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