<template>
  <div class="chart-container" ref="myRef" />
</template>

<script setup>
import * as echarts from "echarts"
import { nextTick, onMounted, ref, watch } from "vue"

// 定义属性
const myRef = ref()
const myChart = ref()
const props = defineProps(["data", "colorStops", "route"])

// 更新图表数据
const updateChart = () => {
  if (!myChart.value) return

  if (myChart.value && props.data && props.route) {
    option.xAxis.name = props.route.meta.xname || ""
    option.yAxis.name = props.route.meta.yname || ""
  }

  option.xAxis.data = props.data.map((item) => item.name)
  option.series[0].data = props.data.map((item) => Number(item.value1))
  option.series[1].data = props.data.map((item) => Number(item.value2))
  option.series[2].data = props.data.map((item) => Number(item.value3))
  myChart.value.setOption(option)
}

// 监听数据变化并更新图表
watch(
  () => props.data,
  (newData) => {
    if (newData) {
      updateChart()
    }
  },
  { immediate: true },
)

// 初始化 ECharts
onMounted(() => {
  nextTick(() => {
    if (myRef.value) {
      myChart.value = echarts.init(myRef.value)
      if (props.data && props.data.length) {
        updateChart()
      }
    }
  })
})

// 图表配置项
const option = {
  tooltip: {},
  legend: {
    data: ["次日留存率", "3日留存率", "5日留存率"],
  },
  grid: {
    left: "2%",
    right: "5%",
    bottom: "0%",
    containLabel: true,
  },
  xAxis: {
    name: "",
    type: "category",
    data: [],
    splitLine: { show: false },
    axisLabel: {
      interval: "auto",
      fontSize: 12,
      rotate: 0,
    },
  },
  yAxis: {
    name: "",
    type: "value",
    splitLine: { show: false },
  },
  series: [
    {
      name: "次日留存率",
      data: [],
      type: "line",
      label: {
        show: true,
        position: "top",
        distance: 15,
        verticalAlign: "middle",
        color: "#424656",
        fontSize: 14,
      },
      smooth: true,
      areaStyle: {
        color: new echarts.graphic.LinearGradient(
          0,
          1,
          0,
          0,
          [
            { offset: 0, color: "#F2F8F2" },
            { offset: 0.9, color: "#5BAB80" },
          ],
          false,
        ),
      },
      symbol: "circle",
      symbolSize: 7,
      itemStyle: {
        color: "#5BAB80",
        borderColor: "#5BAB80",
      },
      lineStyle: { color: "#5BAB80" },
      emphasis: { focus: "series" },
    },
    {
      name: "3日留存率",
      data: [],
      type: "line",
      label: {
        show: true,
        position: "top",
        distance: 15,
        verticalAlign: "middle",
        color: "#424656",
        fontSize: 14,
      },
      smooth: true,
      areaStyle: {
        color: new echarts.graphic.LinearGradient(
          0,
          1,
          0,
          0,
          [
            { offset: 0, color: "#E5D6CC" },
            { offset: 0.9, color: "#938982" },
          ],
          false,
        ),
      },
      symbol: "circle",
      symbolSize: 7,
      itemStyle: {
        color: "#938982",
        borderColor: "#938982",
      },
      lineStyle: { color: "#938982" },
      emphasis: { focus: "series" },
    },
    {
      name: "5日留存率",
      data: [],
      type: "line",
      label: {
        show: true,
        position: "top",
        distance: 15,
        verticalAlign: "middle",
        color: "#424656",
        fontSize: 14,
      },
      smooth: true,
      areaStyle: {
        color: new echarts.graphic.LinearGradient(
          0,
          1,
          0,
          0,
          [
            { offset: 0, color: "#ACD6F0" },
            { offset: 0.9, color: "#22387E" },
          ],
          false,
        ),
      },
      symbol: "circle",
      symbolSize: 7,
      itemStyle: {
        color: "#22387E",
        borderColor: "#22387E",
      },
      lineStyle: { color: "#22387E" },
      emphasis: { focus: "series" },
    },
  ],
}
</script>
