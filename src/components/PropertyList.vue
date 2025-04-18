<template>
    <ul class="grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] auto-rows-auto gap-4 mt-2">
      <li v-for="property in properties" :key="property.id" class="bg-blue-200 rounded flex relative">
          <PropertyPreview :property="property"/>
      </li>
    </ul>
  </template>
  
  <script>
  import PropertyPreview from './PropertyPreview.vue';
  
  export default {
  props: {
      properties: { type: Array, required: true},
  },
  components: {
      PropertyPreview,
  },
  }
  </script>
  
  <style>
  
  </style>