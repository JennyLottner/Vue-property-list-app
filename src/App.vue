<template>
  <div class="grid grid-rows-[3rem_1fr_2rem] min-h-screen">
    <header class="bg-gray-800 text-white text-center p-2.5 sticky top-0 z-1">
      <h1>Properties</h1>
    </header>

    <main class="bg-gray-100 p-4 overflow-auto">
      <button @click="onPropertyEditor(null)">Add property</button>

      <div v-if="isLoading"><p>Loading</p></div>

      <PropertyList
        v-else
        :properties="properties"
        @remove="onRemoveProperty"
        @edit="onPropertyEditor"
      />

      <EditModal :isOpen="isOpen" :id="editedPropertyId" @close="closeModal" />
    </main>

    <footer class="bg-gray-800 text-white text-center sticky bottom-0">
      <p>© Jenny Tover</p>
    </footer>
  </div>
</template>

<script>
import PropertyList from './components/PropertyList.vue'
import EditModal from './components/EditModal.vue'
import { query, remove } from './services/property.service'

export default {
  data() {
    return {
      properties: [],
      isLoading: true,
      isOpen: false,
      editedPropertyId: null,
    }
  },
  methods: {
    async loadProperties() {
      this.isLoading = true
      this.properties = await query()
      this.isLoading = false
    },
    async onRemoveProperty(id) {
      await remove(id)
      await this.loadProperties()
    },
    onPropertyEditor(id) {
      this.editedPropertyId = id
      this.openModal()
    },
    closeModal() {
      this.editedPropertyId = null
      this.isOpen = false
      this.loadProperties()
    },
    openModal() {
      this.isOpen = true
    },
  },
  async mounted() {
    this.properties = await query()
    this.isLoading = false
  },
  components: {
    PropertyList,
    EditModal,
  }
}
</script>

<style scoped>
</style>