<template>
  <ul class="grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] auto-rows-auto gap-4 mt-2"  >
    <li
      v-for="property in properties"
      :key="property.id"
      class="bg-blue-200 rounded flex relative"
    >
      <PropertyPreview :property="property" />

      <div class="actions flex flex-col absolute right-1 bottom-1">
        <button @click="$emit('edit', property.id)">
          <svg  xmlns="http://www.w3.org/2000/svg"  xmlns:xlink="http://www.w3.org/1999/xlink"  version="1.0"  id="Layer_1"  width="18px"  height="18px"  viewBox="0 0 64 64"  enable-background="new 0 0 64 64"  xml:space="preserve">  <path    fill="#231F20"    d="M62.828,12.482L51.514,1.168c-1.562-1.562-4.093-1.562-5.657,0.001c0,0-44.646,44.646-45.255,45.255  C-0.006,47.031,0,47.996,0,47.996l0.001,13.999c0,1.105,0.896,2,1.999,2.001h4.99c0.003,0,9.01,0,9.01,0s0.963,0.008,1.572-0.602  s45.256-45.257,45.256-45.257C64.392,16.575,64.392,14.046,62.828,12.482z M37.356,12.497l3.535,3.536L6.95,49.976l-3.536-3.536  L37.356,12.497z M8.364,51.39l33.941-33.942l4.243,4.243L12.606,55.632L8.364,51.39z M3.001,61.995c-0.553,0-1.001-0.446-1-0.999  v-1.583l2.582,2.582H3.001z M7.411,61.996l-5.41-5.41l0.001-8.73l14.141,14.141H7.411z M17.557,60.582l-3.536-3.536l33.942-33.94  l3.535,3.535L17.557,60.582z M52.912,25.227L38.771,11.083l2.828-2.828l14.143,14.143L52.912,25.227z M61.414,16.725l-4.259,4.259  L43.013,6.841l4.258-4.257c0.782-0.782,2.049-0.782,2.829-0.002l11.314,11.314C62.195,14.678,62.194,15.943,61.414,16.725z"  /></svg>
        </button>

        <button @click="$emit('remove', property.id)">
          <svg  xmlns="http://www.w3.org/2000/svg"  xmlns:xlink="http://www.w3.org/1999/xlink"  width="20px"  height="20px"  viewBox="0 0 32 32"  version="1.1">  <path    d="M26.129 5.871h-5.331v-1.066c0-1.178-0.955-2.132-2.133-2.132h-5.331c-1.178 0-2.133 0.955-2.133 2.132v1.066h-5.331v1.066h1.099l1.067 20.259c0 1.178 0.955 2.133 2.133 2.133h11.729c1.178 0 2.133-0.955 2.133-2.133l1.049-20.259h1.051v-1.066zM12.268 4.804c0-0.588 0.479-1.066 1.066-1.066h5.331c0.588 0 1.066 0.478 1.066 1.066v1.066h-7.464v-1.066zM22.966 27.14l-0.002 0.027v0.028c0 0.587-0.478 1.066-1.066 1.066h-11.729c-0.587 0-1.066-0.479-1.066-1.066v-0.028l-0.001-0.028-1.065-20.203h15.975l-1.046 20.204z"    fill="#000000"  ></path>  <path    d="M15.467 9.069h1.066v17.060h-1.066v-17.060z"    fill="#000000"  ></path>  <path    d="M13.358 26.095l-1.091-17.027-1.064 0.068 1.091 17.027z"    fill="#000000"  ></path>  <path    d="M20.805 9.103l-1.064-0.067-1.076 17.060 1.064 0.067z"    fill="#000000"  ></path></svg>
        </button>
      </div>
    </li>
  </ul>
</template>
  
  <script>
import PropertyPreview from './PropertyPreview.vue';

export default {
  props: {
    properties: { type: Array, required: true },
  },
  components: {
    PropertyPreview,
  },
}
  </script>
  
  <style>
</style>