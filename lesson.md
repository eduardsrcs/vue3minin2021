# Vue v3 from Vladilen at 2021

[Vue docs according to v3](https://v3.vuejs.org/guide/installation.html)

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

(time 1:54:00)[https://www.youtube.com/watch?v=p059z-0JTFg+t=6840s]
