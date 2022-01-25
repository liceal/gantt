<template>
  <div class="gantt-layout">
    <gantt-node
      v-for="d in data"
      :key="d.id"
      :data="d"
      :bus="bus"
      :drag="drag"
      :resize="resize"
    />
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue'
import GanttNode from './gantt-node.vue'
import { GanttLayoutData, Bus } from '@/utils/types'

export default Vue.extend({
  name: 'GanttLayout',
  components: { GanttNode },
  props: {
    data: {
      type: Array as PropType<GanttLayoutData>,
      required: true,
    },
    bus: {
      type: Object as PropType<Bus>,
      required: true,
    },
    drag: {
      type: Boolean,
      default: true,
    },
    resize: {
      type: Boolean,
      default: true,
    },
  },
})
</script>
<style lang="less" scoped>
.gantt-layout {
  position: relative;
}
</style>
