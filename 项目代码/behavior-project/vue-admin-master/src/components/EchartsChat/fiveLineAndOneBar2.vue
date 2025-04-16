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

  // 更新图表的配置项
  if (myChart.value && props.data && props.route) {
    option.xAxis[0].name = props.route.meta.xname || ""
    option.yAxis[0].name = props.route.meta.yname || ""
    option.yAxis[1].name = props.route.meta.yname || ""
  }

  option.xAxis[0].data = props.data.map((item) => item.name)
  option.series[0].data = props.data.map((item) => Number(item.value2))
  option.series[1].data = props.data.map((item) => Number(item.value1))
  option.series[2].data = props.data.map((item) => Number(item.value3))
  option.series[3].data = props.data.map((item) => Number(item.value4))
  option.series[4].data = props.data.map((item) => Number(item.value5))

  // 更新渐变色
  if (props.colorStops) {
    option.series[0].itemStyle.color.colorStops = [
      { offset: 0, color: "#d6e0f5" },
      { offset: 0.9, color: "#3366cc" },
    ]
  }

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
      updateChart()
    }
  })
})

// 图表配置项
const option = {
  tooltip: {
    trigger: "axis",
  },
  toolbox: {},
  legend: {
    data: ["浏览数", "用户数", "收藏数", "加购数", "购买数"],
  },
  xAxis: [
    {
      name: "/小时",
      type: "category",
      data: [],
      axisPointer: {
        type: "shadow",
      },
    },
  ],
  yAxis: [
    {
      type: "value",
      name: "数量",
      min: 0,
      max: 8000000,
      interval: 1000000,
      axisLabel: {
        formatter: "{value}",
      },
    },
    {
      type: "value",
      name: "数量",
      min: 0,
      max: 800000,
      interval: 100000,
      axisLabel: {
        formatter: "{value}",
      },
    },
  ],
  series: [
    {
      name: "浏览数",
      type: "bar",
      data: [],
      showBackground: false,
      itemStyle: {
        color: {
          type: "linear",
          x: 0,
          y: 1,
          x2: 0,
          y2: 0,
          colorStops: [],
        },
      },
    },
    {
      name: "用户数",
      type: "line",
      yAxisIndex: 1,
      data: [],
      label: {
        show: true,
        position: "top",
        distance: 15,
        verticalAlign: "middle",
        color: "#424656",
        fontSize: 8,
      },
      smooth: true,
      symbol: "circle",
      symbolSize: 7,
      itemStyle: {
        color: "#ffff00",
        borderColor: "#ffff00",
      },
      lineStyle: { color: "#ffff00" },
      emphasis: { focus: "series" },
    },
    {
      name: "收藏数",
      type: "line",
      yAxisIndex: 1,
      data: [],
      label: {
        show: true,
        position: "top",
        distance: 15,
        verticalAlign: "middle",
        color: "#424656",
        fontSize: 8,
      },
      smooth: true,
      symbol: "circle",
      symbolSize: 7,
      itemStyle: {
        color: "#00ff00",
        borderColor: "#00ff00",
      },
      lineStyle: { color: "#00ff00" },
      emphasis: { focus: "series" },
    },
    {
      name: "加购数",
      type: "line",
      yAxisIndex: 1,
      data: [],
      label: {
        show: true,
        position: "top",
        distance: 15,
        verticalAlign: "middle",
        color: "#424656",
        fontSize: 8,
      },
      smooth: true,
      symbol: "circle",
      symbolSize: 7,
      itemStyle: {
        color: "#00ffaa",
        borderColor: "#00ffaa",
      },
      lineStyle: { color: "#00ffaa" },
      emphasis: { focus: "series" },
    },
    {
      name: "购买数",
      type: "line",
      yAxisIndex: 1,
      data: [],
      label: {
        show: true,
        position: "top",
        distance: 15,
        verticalAlign: "middle",
        color: "#424656",
        fontSize: 8,
      },
      smooth: true,
      symbol: "circle",
      symbolSize: 7,
      itemStyle: {
        color: "#00ffff",
        borderColor: "#00ffff",
      },
      lineStyle: { color: "#00ffff" },
      emphasis: { focus: "series" },
    },
  ],
}
</script>
