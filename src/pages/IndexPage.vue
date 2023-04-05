<template>
  <q-page class="row justify-center">
    <q-list class="col-10 row">
      <q-item class="column" v-for="post in thingStore.posts.data" :key="post.id">
        <q-item-section class="row text-h6">{{ post.id }}:{{post.title}}</q-item-section>
        <div class="row text-p">{{ post.body }}</div>
        <div class="row">
          <q-btn color="negative" icon="delete" label="delete" @click="thingStore.deletePost(post.id)" />
        </div>
      </q-item>
    </q-list>
    <!-- <pre class="col-5">{{thingStore.posts}}</pre> -->
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { useThingStore } from 'stores/thing-store.js'

export default defineComponent({
  name: 'IndexPage',
  async setup () {
    const thingStore = useThingStore()
    await thingStore.getPosts()
    return {
      thingStore
    }
  }
})
</script>
