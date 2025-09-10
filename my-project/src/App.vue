<template>
  <section>
    <header><h1>My Friends</h1></header>
    <!-- <form action=""></form> -->
    <main>
      <!-- <pre>{{ friends }}</pre> -->
      <new-friend @add-contact="addContact"></new-friend>
      <friend-contact v-for="friend in friends" :key="friend.id" :id="friend.id" :name="friend.name" :phone="friend.phone" 
      :email="friend.email" :is-favorite="friend.isFavorite"
       @toggle-favorite="toggleFavoriteStatus" @delete="deleteContact"></friend-contact>
      <!-- <friend-contact name="vizor" phone="234 659464" email="vizor@gmail.com" is-favorite="0"></friend-contact> -->
      

    </main>
  </section>
</template>
<script>
import FriendContact from './FriendContact.vue';
import NewFriend from './NewFriend.vue';
export default{
  components: { FriendContact, NewFriend},
 
  data(){
    return{
      friends: [
        {
          id:'Gbenga',
          name:'Vizor',
          phone: '245 68899',
          email: 'vizor@gamil.com',
          isFavorite: true
        },
        {
          id:'blessing',
          name:'bari leyoma',
          phone: '245 9808999',
          email: 'bari@gamil.com',
          isFavorite: false
        }
      ],
    }
  },
  methods: {
    toggleFavoriteStatus(friendId) {
      const identifiedfriend = this.friends.find(friend => friend.id === friendId);
      identifiedfriend.isFavorite = !identifiedfriend.isFavorite;
     
    },
    addContact(name, phone, email) {
      const NewFriendContact = {
        id: new Date().toISOString(),
        name: name,
        phone: phone,
        email: email,
        isFavorite: false
      };
      this.friends.push(NewFriendContact);
    }, 
    deleteContact(friendId) {
      this.friends = this.friends.filter((friend) => friend.id !== friendId);
    }
  },
};
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');
* {
	box-sizing: border-box;
}

html {
	font-family: 'Jost', sans-serif;
}

body {
	margin: 0;
}

header {
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	margin: 3rem auto;
	border-radius: 10px;
	padding: 1rem;
	background-color: #58004d;
	color: white;
	text-align: center;
	width: 90%;
	max-width: 40rem;
}

#app ul {
	margin: 0;
	padding: 0;
	list-style: none;
}

#app li,
#app form {
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	margin: 1rem auto;
	border-radius: 10px;
	padding: 1rem;
	text-align: center;
	width: 90%;
	max-width: 40rem;
}

#app h2 {
	font-size: 2rem;
	border-bottom: 4px solid #ccc;
	color: #58004d;
	margin: 0 0 1rem 0;
}

#app button {
	font: inherit;
	cursor: pointer;
	border: 1px solid #ff0077;
	background-color: #ff0077;
	color: white;
	padding: 0.05rem 1rem;
	box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
	padding: 0.4em 1.6em;
	border-radius: 10px;
	text-transform: uppercase;
	font-weight: bold;
}

#app button:hover,
#app button:active {
	background-color: #ec3169;
	border-color: #ec3169;
	box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
#app input {
	font: inherit;
	padding: 0.15rem;
}
#app label {
	font-weight: bold;
	margin-right: 1rem;
	width: 7rem;
	display: inline-block;
}
#app form div {
	margin: 1rem 0;
}
</style>