<template>
  <v-gantt
    style="height: 400px;"
    :tree-attrs="treeAttrs"
    :data.sync="data"
    :view.sync="view"
    :is-date-filter="true"
    :is-show-tree="true"
    :drag="true"
    :resize="false"
  >
    <div slot="tree-header">
      <h5 style="margin: 0;">本地测试甘特图</h5>
    </div>
  </v-gantt>
</template>

<script>
import VGantt from '../index.vue'
export default {
  components: { VGantt },
  data() {
    const y = new Date().getFullYear()
    const m = `${new Date().getMonth() + 1}`.padStart(2, 0)
    const d = (date) => `${y}-${m}-${date}`
    return {
      view: 'day',
      data: [
        {
          id: 'group-1',
          name: '群组-1',
          children: [
            {
              id: 'item-1',
              name: '叶节点-1',
              progress: 30,
              startDate: d('06'),
              endDate: d('07'),
            },
            {
              id: 'group-2',
              name: '群组-2',
              children: [
                {
                  id: 'item-2',
                  name: '叶节点-2',
                  progress: 50,
                  startDate: d('08'),
                  endDate: d('10'),
                },
              ],
            },
          ],
        },
        {
          id: 'group-3',
          name: '群组-3',
          children: [
            {
              id: 'item-3',
              name: '叶节点-3',
              progress: 30,
              startDate: d('13'),
              endDate: d('15'),
            },
            {
              id: 'group-4',
              name: '群组-4',
              children: [
                {
                  id: 'item-4',
                  name: '叶节点-4',
                  progress: 50,
                  startDate: d('16'),
                  endDate: d('17'),
                },
              ],
            },
          ],
        },
        {
          id: 'milestone-1',
          name: '里程碑-1',
          date: d('10'),
          done: true,
        },
        {
          id: 'milestone-2',
          name: '里程碑-2',
          date: d('24'),
          done: false,
        },
      ],
      treeAttrs: {
        draggable: true,
      },
      filterDate: '',
    }
  },
}
</script>
