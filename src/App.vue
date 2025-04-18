<template>
  <div class="grid grid-rows-[3rem_1fr_2rem] min-h-screen">
    <header class="bg-gray-800 text-white text-center p-2.5 sticky top-0 z-1">
      <h1>Properties</h1>
    </header>

    <main class="bg-gray-100 p-4 overflow-auto">

      <div v-if="isLoading"><p>Loading</p></div>

      <PropertyList v-else 
      :properties="properties"
      @remove="onRemoveProperty"
      @edit="onPropertyEditor"
      />

    </main>

    <footer class="bg-gray-800 text-white text-center sticky bottom-0">
      <p>© Jenny Tover</p>
    </footer>
  </div>
</template>

<script>
import PropertyList from './components/PropertyList.vue'
import { query } from './services/property.service'

export default {
  data() {
    return {
      properties: [],
      isLoading: true,
    }
  },
  methods: {
    async loadProperties() {
      this.isLoading = true
      this.properties = await query()
      this.isLoading = false
    },
    async onRemoveProperty(id) {
      console.log('removing', id)
    },
    onPropertyEditor(id) {
      if (!id ) console.log('adding property')
      else console.log('editing', id)
    },
  },
  async mounted() {
    this.properties = await query()
    this.isLoading = false
  },
  components: {
    PropertyList,
  }
}
</script>

<style scoped>
</style>