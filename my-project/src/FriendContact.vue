<template>
    <!-- <main>
        These are my friends within my Friend contct
    </main> -->
    <li>
        <h2>{{ name }}  {{ isFavorite ? '(Favorite)' : '' }}</h2>
        <button @click="ToggleFavorite">Toggle Favorite</button>
        <button @click="ToggleDetails">{{ detailsAreVisible ? 'Hide' : 'show'}} Details</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ phone }} </li>
            <li><strong>Email:</strong> {{ email }} </li>
        </ul>
        <button @click="$emit('delete', id)">Delete</button>
    </li>
</template>

<script>
export default {
    // props: [
    //     'name',
    //     'phone',
    //     'email',
    //     'isFavorite',
    // ],
    props: {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        isFavorite: {
            type: Boolean,
            required: false,
            default: false,
            // validator: function(value) {
            //     return value === '1' || value === '0';
            // }
        },
    },
     emits: ['toggle-favorite', 'delete'],
    // emits: {
    //     'toggle-favorite': function(id) {
    //         if (id) {
    //             return true;
    //         } else {
    //             console.warn('Id is missing!');
    //             return false;
    //         }
    //     }
    // },
    data () {
        return {
            detailsAreVisible: false,
        };
    },
    methods: {
        ToggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible ;
            
        }, 
        ToggleFavorite() {
        this.$emit('toggle-Favorite', this.id);
        },
    }
};
</script>