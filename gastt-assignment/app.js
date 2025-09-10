const { createApp } = Vue;

createApp({
  data() {
    return {
      mood: '',
      bgColor: '#ffffff',
    };
  },
  watch: {
    mood(newMood) {
      console.log(`Mood changed to: ${newMood}`);

      switch (newMood.toLowerCase()) {
        case 'happy':
          this.bgColor = '#f9f871';
          break;
        case 'sad':
          this.bgColor = '#a3d2f7';
          break;
        case 'angry':
          this.bgColor = '#f76c6c';
          break;
        case 'relaxed':
          this.bgColor = '#a1f0dc';
          break;
        case '':
          this.bgColor = '#ffffff';
          break;
        default:
          this.bgColor = '#e0e0e0';
      }
    }
  },
 computed: {
  moodMessage() {
    const mood = this.mood.toLowerCase();

    if (!mood) return 'Please enter your mood.';

    const emojis = {
      happy: '😊',
      sad: '😢',
      angry: '😠',
      relaxed: '😌',
    };

    const emoji = emojis[mood] || '🤔';

    return `You are feeling ${mood} ${emoji}`;
  }
},
  methods: {
    resetMood() {
      this.mood = '';
      this.bgColor = '#ffffff';
    }
  }
})
app.mount('#app');
