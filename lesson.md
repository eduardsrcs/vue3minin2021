# Vue v3 from Vladilen at 2021

[Vue docs according to v3](https://v3.vuejs.org/guide/installation.html)

[github repo](https://github.com/eduardsrcs/vue3minin2021/blob/master/lesson.md)

## Intro

Here we used locally saved vue3 script to build simple solution and see how some features work. 

## CDN

```html
<script src="https://unpkg.com/vue@next"></script>
```

[direct link at this moment](https://unpkg.com/vue@3.0.5/dist/vue.global.js), this is redirect from link above.

## Create app

```js
Vue.createApp()
```



[time 24:40](https://www.youtube.com/watch?v=p059z-0JTFg&t=1480s)

## Directives

(time 1:28:00)[https://www.youtube.com/watch?v=p059z-0JTFg+t=5280s]

## Reloading page 

(time 1:40:27)[https://www.youtube.com/watch?v=p059z-0JTFg+t=6027s]

```html
<style>
  [v-kloak] {
    display: none;
  }
</style>
<div id="dirs" class="container pt-5" v-cloak>
</div>
```

## Cycles

(time 1:43:00)[https://www.youtube.com/watch?v=p059z-0JTFg+t=6180s]

```vue
<ul class="list">
  <li class="list-item" v-for="item in 10">{{ item }}</li>
</ul>
```

### objects in cycles

```vue
<li class="list-item" v-for="(value, key) in person">{{ key }}: {{ value }}</li>
```

### Remove elements

v-if removes element, while v-show sets display:none

```vue
<li
  class="list-item"
  v-for="(item, i) in items"
  @click="items.splice(i, 1)"
>
  {{ item }}
</li>
```

[time 1:54:00](https://www.youtube.com/watch?v=p059z-0JTFg+t=6840s)

## Lists rendering

### Stop propagation

here inputs will no propagate clicks, therefore we will not remove this element with click on input:

```vue
<ul class="list" v-if="items.length">
  <!-- <li class="list-item" v-for="item in 10">{{ item }}</li> -->
  <!-- <li class="list-item" v-for="(value, key) in person">{{ key }}: {{ value }}</li> -->
  <li
    class="list-item"
    v-for="(item, i) in items"
    @click="items.splice(i, 1)"
  >
  <strong>{{ item }}</strong>
    <input @click.stop type="text" />
  </li>
</ul>
```

### Fix bag with incorrect element removing

Use `:key` binding, but do not use index as key, because it doesn't give effect. Use unique part element instead. 

```vue
<li
  class="list-item"
  v-for="(item, i) in items"
  :key="i + item"
  @click="items.splice(i, 1)"
>
<strong>{{ item }}</strong>
  <input @click.stop type="text" />
</li>
```

## Filter data inside cycle

[time 2:02:30](https://www.youtube.com/watch?v=p059z-0JTFg+t=7350s)

create *computed*.

```js
computed: {
  evenItems() {
    return this.items.filter(i => i % 2 === 0)
  }
}
```

use this in list.

## Event handing

[guide on vuejs.org](https://vuex.vuejs.org/guide/forms.html#two-way-computed-property)

### Key modifiers

[time 2:07:10](https://www.youtube.com/watch?v=p059z-0JTFg+t=7630s)

#### using refs and key modifiers

```vue
<input type="text" v-model="itemInput" @keyup.enter="addItem"/>
```

```js
methods: {
  addItem() {
    if(this.itemInput){
      this.items.push(this.itemInput)
    }
  }
},
```

but here we can use *refs*

```vue
<input type="text" ref="itemInput" @keyup.shift.enter.exact="addItem"/>
```

```js
addItem() {
  if(this.$refs.itemInput.value){
    this.items.unshift(this.$refs.itemInput.value)
    this.$refs.itemInput.value = ''
  }
```

will trigger only on `shift` + `enter`

### Mouse button modifiers

`.left`, `.right`, `.middle`

```vue
<li
  class="list-item"
  v-for="(item, i) in items"
  :key="i + item"
  @click.right.prevent="items.splice(i, 1)"
>
```

this will use right button and will prevent context menu calling. 

## Multiple methods call on event

```js
remove(i){
  if(i || i === 0){
    this.items.splice(i, 1)
  }
},
log(item){
  console.log('Removed item:', item)
}
```

and 

```vue
<li
  class="list-item"
  v-for="(item, i) in items"
  :key="i + item"
  @click.right.prevent="remove(i), log(item)"
>
```

