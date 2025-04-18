<template>
    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" @close="closeModal" class="relative z-10">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black/25"></div>
        </TransitionChild>
  
        <div class="fixed inset-0 overflow-y-auto">
          <div
            class="flex min-h-full items-center justify-center p-4 text-center"
          >
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel
                class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
              >
                <DialogTitle
                  as="h3"
                  class="text-lg font-medium leading-6 text-gray-900"
                >
                  {{ id ? "Edit" : "Add" }} property
                </DialogTitle>
                <form
                  v-if="propToEdit !== null"
                  class="mt-2"
                  @submit.prevent="submitPropertyForm"
                >
                  <div>
                    <label for="name">Name:</label>
                    <input type="text" id="name" v-model="propToEdit.name" />
                  </div>
  
                  <div>
                    <label for="price">Price:</label>
                    <input type="number" id="price" v-model="propToEdit.price" />
                  </div>
  
                  <div>
                    <label for="imgUrl">Image:</label>
                    <input type="file" id="imgUrl" @change="onFileChange" />
                  </div>
  
                  <div class="mt-4">
                    <button
                      type="submit"
                      class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </template>
    
  <script>
  import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
  } from '@headlessui/vue'
  import { save, getById, getEmptyProperty } from '../services/property.service'
  
  export default {
    props: {
      isOpen: { type: Boolean, required: true },
      id: { type: Number, default: null },
    },
    data() {
      return {
        propToEdit: null
      }
    },
    methods: {
      closeModal() {
        this.$emit('close')
      },
      async submitPropertyForm() {
        await save(this.propToEdit)
        this.closeModal()
      },
      onFileChange(event) {
        const file = event.target.files[0]
        if (file) {
          this.propToEdit.imgUrl = URL.createObjectURL(file)
        }
      },
    },
    watch: {
      id: {
        immediate: true,
        async handler(newId) {
          this.propToEdit = newId ? await getById(newId) : getEmptyProperty()
        }
      }
    },
    async mounted() {
      this.propToEdit = this.id ? await getById(this.id) : getEmptyProperty()
    },
    components: {
      Dialog,
      DialogPanel,
      DialogTitle,
      TransitionRoot,
      TransitionChild
    },
  }
  </script>
    