const Dirs = {
  data: () => ({
    myHTML: '<p>This is my HTML content</p>',
    title: 'Hello directives!',
    // itemInput: '',
    person: {
      firstName: 'Varius',
      lastName: 'Wow',
      age: 27
    },
    items: [1, 2, 3, 4, 5, 6]
  }),
  methods: {
    addItem() {
      if(this.$refs.itemInput.value){
        this.items.unshift(this.$refs.itemInput.value)
        this.$refs.itemInput.value = ''
      }
    },
    remove(i){
      if(i || i === 0){
        this.items.splice(i, 1)
      }
    },
    log(item){
      console.log('Removed item:', item)
    }
  },
  computed: {
    evenItems() {
      return this.items.filter(i => i % 2 === 0)
    }
  }
}

Vue.createApp(Dirs).mount('#dirs')