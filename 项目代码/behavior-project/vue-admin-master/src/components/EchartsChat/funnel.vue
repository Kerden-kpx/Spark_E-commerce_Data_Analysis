<template>
  <div class="chart-container" ref="myRef" />
</template>

<script setup>
import * as echarts from "echarts"
import { onMounted, ref, watch, nextTick } from "vue"

// 定义属性
const myRef = ref()
const myChart = ref()
const props = defineProps(["data", "colorStops", "route"])

// 监听数据变化并更新图表
const updateChart = () => {
  if (myChart.value) {
    option.series[0].data = props.data
    option.legend.data = props.data.map((item) => item.name)
    myChart.value.setOption(option, true) // 使用 `true` 表示合并而不是完全重绘
  }
}

// 初始化 ECharts
onMounted(() => {
  nextTick(() => {
    if (myRef.value) {
      myChart.value = echarts.init(myRef.value)
      updateChart()
    }
  })
})

// 监听数据变化
watch(
  () => props.data,
  (newData) => {
    updateChart()
  },
  { immediate: true },
)

// 图表配置项
const option = {
  title: {
    text: "",
  },
  tooltip: {
    trigger: "item",
    formatter: function (params) {
      return `${params.seriesName} <br/>${params.name} : ${params.data.realValue} (${params.value}%)`
    },
  },
  toolbox: {
  },
  legend: {
    data: [],
  },
  series: [
    {
      name: "Funnel",
      type: "funnel",
      left: "10%",
      top: 60,
      bottom: 60,
      width: "80%",
      min: 0,
      max: 100,
      minSize: "0%",
      maxSize: "100%",
      sort: "descending",
      gap: 2,
      label: {
        show: true,
        position: "inside",
        formatter: function (params) {
          return `${params.name} : ${params.data.realValue} (${params.value}%)`
        },
      },
      labelLine: {
        length: 10,
        lineStyle: {
          width: 1,
          type: "solid",
        },
      },
      itemStyle: {
        borderColor: "#fff",
        borderWidth: 1,
      },
      emphasis: {
        label: {
          fontSize: 20,
        },
      },
      data: [],
    },
  ],
}
</script>
