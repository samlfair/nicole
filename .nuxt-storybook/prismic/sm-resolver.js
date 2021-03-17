import Vue from 'vue'

export default async (_, inject) => {
  let sliceMachine = new Vue({
    methods: {
      resolver({ sliceName, i }) {
        return [ import(`/Users/samlittlefair/Documents/asides/nicole/slices/${sliceName}.vue`), import(`/Users/samlittlefair/Documents/asides/nicole/slices/${sliceName}/index.vue`), import(`/Users/samlittlefair/Documents/asides/nicole/slices/${sliceName}/index.js`), import(`/Users/samlittlefair/Documents/asides/nicole/slices/${sliceName}/${sliceName}.vue`),import(`/Users/samlittlefair/Documents/asides/nicole/node_modules/sams-slices/src/slices/${sliceName}.vue`), import(`/Users/samlittlefair/Documents/asides/nicole/node_modules/sams-slices/src/slices/${sliceName}/index.vue`), import(`/Users/samlittlefair/Documents/asides/nicole/node_modules/sams-slices/src/slices/${sliceName}/index.js`), import(`/Users/samlittlefair/Documents/asides/nicole/node_modules/sams-slices/src/slices/${sliceName}/${sliceName}.vue`) ]
      }
    }
  })
  inject('sliceMachine', sliceMachine);
}
