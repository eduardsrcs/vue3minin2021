const Dirs = {
  data: () => ({
    myHTML: '<p>This is my HTML content</p>',
    title: 'Hello directives!',
    person: {
      firstName: 'Varius',
      lastName: 'Wow',
      age: 27
    },
    items: [1, 2, 3, 4, 5, 6]
  })
}

Vue.createApp(Dirs).mount('#dirs')