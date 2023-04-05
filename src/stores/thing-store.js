import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'

export const useThingStore = defineStore('counter', {
  state: () => ({
    posts: ref([])
  }),

  getters: {
    doubleCount (state) {
      return state.counter * 2
    }
  },

  actions: {
    async getPosts () {
      try {
        const posts = await axios.get('https://jsonplaceholder.typicode.com/posts')
        this.posts = posts
      } catch (error) {
        alert(error.message)
      }
    },
    async deletePost (id) {
      console.log('https://jsonplaceholder.typicode.com/posts/' + String(id))
      const dat = await axios.delete('https://jsonplaceholder.typicode.com/posts/' + String(id))
      this.getPosts()
      alert(dat.status)
    }
  }
})
