<template>
  <div>
    <component :is="compName" :widget="widget">
    </component>
  </div>
</template>
<script>
const DEFAULT_NAME = 'piazza-box'

export default {
  name: 'piazza-box',
  data() {
    return {
      compName: DEFAULT_NAME
    }
  },
  props: {
    widget: {
      type: Object
    }
  },
  created() {
    this.loadWidget()
  },
  methods: {
    /**
     * 加载widget
     */
    loadWidget() {
      if(this.widget != null) {
        let url = this.widget['url']
        let name = this.widget['name'] || DEFAULT_NAME
        this.$set(this.$options.components, name, () => import(url))
        this.compName = name
      }
    }
  }
}
</script>
