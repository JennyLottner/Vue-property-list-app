<template>
    <div class="flex flex-col p-2">
      <img
        :src="property.imgUrl"
        :alt="property.id"
        class="aspect-5/3 object-cover rounded"
      />
      <strong class="text-lm w-3/4">{{ property.name }}</strong>
      <p class="text-sm"><strong>Price:</strong> {{ property.price }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      property: { type: Object, required: true },
    },
    inheritAttrs: false,
  }
  </script>
  
  <style>
  </style>