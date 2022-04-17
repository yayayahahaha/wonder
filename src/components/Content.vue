<template>
  <div class="main_body" id="main_body">
    <div class="scene" v-for="(item, key) in list" :key="key" @click="wonderClick(key)">
      <div class="wonder layer" data-depth="0.5">
        <img :src="item.image_source" @load="loadedNumber++" />
        <p v-text="item.name"></p>
      </div>
    </div>

    <div class="loading" :style="loadingStyle">
      <div class="line"></div>
      <br />
      <div class="persent" v-text="loadingContext"></div>
    </div>

    <div :class="detailClass">
      <div class="_block">
        <div class="_img" id="_img" :style="detailStyle"></div>
        <div class="_cover">
          <div class="_content" id="_content" v-html="detailHTML"></div>
          <a :href="detailLink" target="_blank"><div class="_preview_btn" id="_preview_btn">Visit</div></a>
        </div>
      </div>
      <div class="_back" id="back" @click="back"></div>
    </div>
  </div>
</template>

<script setup>
import { wonders } from '@/dictionary/index'
import { watch, computed, reactive, ref } from 'vue'

const list = reactive(wonders)

const loadedNumber = ref(0)
const loadingProcess = computed(() => {
  const totalNumber = list.length
  const precision = 2
  const times = Math.pow(10, precision + 2)

  return (Math.round((loadedNumber.value / totalNumber) * times) * 100) / times
})
const loadingContext = computed(() => `${loadingProcess.value}%`)
const loadingStyle = computed(() => (loadedNumber.value === list.length ? 'opacity: 0; pointer-events:none;' : ''))

const back = function () {
  detailClass.value = 'detail'
  detailHTML.value = null
  detailStyle.value = null
  detailLink.value = null
}

const detailClass = ref('')
const detailHTML = ref('')
const detailStyle = ref('')
const detailLink = ref('')

const wonderClick = function (key) {
  detailClass.value = 'detail clicked'
  detailHTML.value = list[key].content
  detailStyle.value = 'background-image: url("' + list[key].image_source + '");'
  detailLink.value = list[key].url
}
</script>
