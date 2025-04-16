// vite.config.ts
import { defineConfig, loadEnv } from "file:///D:/%E5%9F%BA%E4%BA%8ESpark%E7%9A%84%E7%94%B5%E5%95%86%E7%94%A8%E6%88%B7%E8%A1%8C%E4%B8%BA%E5%88%86%E6%9E%90/%E9%A1%B9%E7%9B%AE%E4%BB%A3%E7%A0%81/behavior-project/vue-admin-master/node_modules/.pnpm/vite@5.3.5_@types+node@20.14.12_less@4.2.0_sass@1.77.8/node_modules/vite/dist/node/index.js";
import { fileURLToPath, URL } from "node:url";
import UnoCSS from "file:///D:/%E5%9F%BA%E4%BA%8ESpark%E7%9A%84%E7%94%B5%E5%95%86%E7%94%A8%E6%88%B7%E8%A1%8C%E4%B8%BA%E5%88%86%E6%9E%90/%E9%A1%B9%E7%9B%AE%E4%BB%A3%E7%A0%81/behavior-project/vue-admin-master/node_modules/.pnpm/unocss@0.60.4_postcss@8.4.40_rollup@4.19.1_vite@5.3.5_@types+node@20.14.12_less@4.2.0_sass@1.77.8_/node_modules/unocss/dist/vite.mjs";
import AutoImport from "file:///D:/%E5%9F%BA%E4%BA%8ESpark%E7%9A%84%E7%94%B5%E5%95%86%E7%94%A8%E6%88%B7%E8%A1%8C%E4%B8%BA%E5%88%86%E6%9E%90/%E9%A1%B9%E7%9B%AE%E4%BB%A3%E7%A0%81/behavior-project/vue-admin-master/node_modules/.pnpm/unplugin-auto-import@0.17.8_@vueuse+core@10.11.0_vue@3.4.34_typescript@5.4.5___rollup@4.19.1/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///D:/%E5%9F%BA%E4%BA%8ESpark%E7%9A%84%E7%94%B5%E5%95%86%E7%94%A8%E6%88%B7%E8%A1%8C%E4%B8%BA%E5%88%86%E6%9E%90/%E9%A1%B9%E7%9B%AE%E4%BB%A3%E7%A0%81/behavior-project/vue-admin-master/node_modules/.pnpm/unplugin-vue-components@0.26.0_@babel+parser@7.25.0_rollup@4.19.1_vue@3.4.34_typescript@5.4.5_/node_modules/unplugin-vue-components/dist/vite.js";
import { ElementPlusResolver } from "file:///D:/%E5%9F%BA%E4%BA%8ESpark%E7%9A%84%E7%94%B5%E5%95%86%E7%94%A8%E6%88%B7%E8%A1%8C%E4%B8%BA%E5%88%86%E6%9E%90/%E9%A1%B9%E7%9B%AE%E4%BB%A3%E7%A0%81/behavior-project/vue-admin-master/node_modules/.pnpm/unplugin-vue-components@0.26.0_@babel+parser@7.25.0_rollup@4.19.1_vue@3.4.34_typescript@5.4.5_/node_modules/unplugin-vue-components/dist/resolvers.js";
import { createSvgIconsPlugin } from "file:///D:/%E5%9F%BA%E4%BA%8ESpark%E7%9A%84%E7%94%B5%E5%95%86%E7%94%A8%E6%88%B7%E8%A1%8C%E4%B8%BA%E5%88%86%E6%9E%90/%E9%A1%B9%E7%9B%AE%E4%BB%A3%E7%A0%81/behavior-project/vue-admin-master/node_modules/.pnpm/vite-plugin-svg-icons@2.0.1_vite@5.3.5_@types+node@20.14.12_less@4.2.0_sass@1.77.8_/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import path from "path";
import vue from "file:///D:/%E5%9F%BA%E4%BA%8ESpark%E7%9A%84%E7%94%B5%E5%95%86%E7%94%A8%E6%88%B7%E8%A1%8C%E4%B8%BA%E5%88%86%E6%9E%90/%E9%A1%B9%E7%9B%AE%E4%BB%A3%E7%A0%81/behavior-project/vue-admin-master/node_modules/.pnpm/@vitejs+plugin-vue@5.1.1_vite@5.3.5_@types+node@20.14.12_less@4.2.0_sass@1.77.8__vue@3.4.34_typescript@5.4.5_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///D:/%E5%9F%BA%E4%BA%8ESpark%E7%9A%84%E7%94%B5%E5%95%86%E7%94%A8%E6%88%B7%E8%A1%8C%E4%B8%BA%E5%88%86%E6%9E%90/%E9%A1%B9%E7%9B%AE%E4%BB%A3%E7%A0%81/behavior-project/vue-admin-master/vite.config.ts";
var vite_config_default = defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    base: "./",
    server: {
      port: 9099
      //自定义端口
    },
    plugins: [
      vue(),
      UnoCSS(),
      // ...
      AutoImport({
        resolvers: [
          ElementPlusResolver()
          // 自动导入图标组件
        ]
      }),
      // 主题定制
      Components({
        resolvers: [ElementPlusResolver({ importStyle: "sass" })],
        // 指定自定义组件位置(默认:src/components)自动注册全局组件
        dirs: [
          // "src/components/ElementPlus_components/",
          "src/components/",
          "src/**/components"
        ],
        // 生成components.d.ts
        dts: false,
        deep: true
      }),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), "src/assets/svgs")],
        symbolId: "icon-[dir]-[name]"
      })
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
      }
    },
    //主题定制(主题覆盖)
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          // 自动导入定制化样式文件进行样式覆盖
          additionalData: `  
           @use "@/styles/element/index.scss" as *;
           @use "@/config/public.scss" as *;
          `
        }
      }
    }
    //配置代理跨域
    // server: {
    //   proxy: {
    //     [env.VITE_BASE_URL]: {
    //       target: env.VITE_URL,
    //       changeOrigin: true,
    //       rewrite: (path) => path.replace(/^\/api/, ''),
    //     },
    //   }
    // }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxcdTU3RkFcdTRFOEVTcGFya1x1NzY4NFx1NzUzNVx1NTU0Nlx1NzUyOFx1NjIzN1x1ODg0Q1x1NEUzQVx1NTIwNlx1Njc5MFxcXFxcdTk4NzlcdTc2RUVcdTRFRTNcdTc4MDFcXFxcYmVoYXZpb3ItcHJvamVjdFxcXFx2dWUtYWRtaW4tbWFzdGVyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxcdTU3RkFcdTRFOEVTcGFya1x1NzY4NFx1NzUzNVx1NTU0Nlx1NzUyOFx1NjIzN1x1ODg0Q1x1NEUzQVx1NTIwNlx1Njc5MFxcXFxcdTk4NzlcdTc2RUVcdTRFRTNcdTc4MDFcXFxcYmVoYXZpb3ItcHJvamVjdFxcXFx2dWUtYWRtaW4tbWFzdGVyXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi8lRTUlOUYlQkElRTQlQkElOEVTcGFyayVFNyU5QSU4NCVFNyU5NCVCNSVFNSU5NSU4NiVFNyU5NCVBOCVFNiU4OCVCNyVFOCVBMSU4QyVFNCVCOCVCQSVFNSU4OCU4NiVFNiU5RSU5MC8lRTklQTElQjklRTclOUIlQUUlRTQlQkIlQTMlRTclQTAlODEvYmVoYXZpb3ItcHJvamVjdC92dWUtYWRtaW4tbWFzdGVyL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSBcInZpdGVcIlxuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSBcIm5vZGU6dXJsXCJcbmltcG9ydCBVbm9DU1MgZnJvbSBcInVub2Nzcy92aXRlXCJcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gXCJ1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlXCJcbmltcG9ydCBDb21wb25lbnRzIGZyb20gXCJ1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlXCJcbmltcG9ydCB7IEVsZW1lbnRQbHVzUmVzb2x2ZXIgfSBmcm9tIFwidW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzXCJcbmltcG9ydCB7IGNyZWF0ZVN2Z0ljb25zUGx1Z2luIH0gZnJvbSBcInZpdGUtcGx1Z2luLXN2Zy1pY29uc1wiXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiXG5pbXBvcnQgdnVlIGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWVcIlxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBtb2RlIH0pID0+IHtcbiAgLy9cdTYyRkZcdTUyMzBcdTkxNERcdTdGNkVcdTc2ODRcdTczQUZcdTU4ODNcdTUzRDhcdTkxQ0ZcbiAgY29uc3QgZW52ID0gbG9hZEVudihtb2RlLCBwcm9jZXNzLmN3ZCgpKVxuICByZXR1cm4ge1xuICAgIGJhc2U6IFwiLi9cIixcbiAgICBzZXJ2ZXI6IHtcbiAgICAgIHBvcnQ6IDkwOTksIC8vXHU4MUVBXHU1QjlBXHU0RTQ5XHU3QUVGXHU1M0UzXG4gICAgfSxcbiAgICBwbHVnaW5zOiBbXG4gICAgICB2dWUoKSxcbiAgICAgIFVub0NTUygpLFxuICAgICAgLy8gLi4uXG4gICAgICBBdXRvSW1wb3J0KHtcbiAgICAgICAgcmVzb2x2ZXJzOiBbXG4gICAgICAgICAgRWxlbWVudFBsdXNSZXNvbHZlcigpLCAvLyBcdTgxRUFcdTUyQThcdTVCRkNcdTUxNjVcdTU2RkVcdTY4MDdcdTdFQzRcdTRFRjZcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgICAgLy8gXHU0RTNCXHU5ODk4XHU1QjlBXHU1MjM2XG4gICAgICBDb21wb25lbnRzKHtcbiAgICAgICAgcmVzb2x2ZXJzOiBbRWxlbWVudFBsdXNSZXNvbHZlcih7IGltcG9ydFN0eWxlOiBcInNhc3NcIiB9KV0sXG4gICAgICAgIC8vIFx1NjMwN1x1NUI5QVx1ODFFQVx1NUI5QVx1NEU0OVx1N0VDNFx1NEVGNlx1NEY0RFx1N0Y2RShcdTlFRDhcdThCQTQ6c3JjL2NvbXBvbmVudHMpXHU4MUVBXHU1MkE4XHU2Q0U4XHU1MThDXHU1MTY4XHU1QzQwXHU3RUM0XHU0RUY2XG4gICAgICAgIGRpcnM6IFtcbiAgICAgICAgICAvLyBcInNyYy9jb21wb25lbnRzL0VsZW1lbnRQbHVzX2NvbXBvbmVudHMvXCIsXG4gICAgICAgICAgXCJzcmMvY29tcG9uZW50cy9cIixcbiAgICAgICAgICBcInNyYy8qKi9jb21wb25lbnRzXCIsXG4gICAgICAgIF0sXG4gICAgICAgIC8vIFx1NzUxRlx1NjIxMGNvbXBvbmVudHMuZC50c1xuICAgICAgICBkdHM6IGZhbHNlLFxuICAgICAgICBkZWVwOiB0cnVlLFxuICAgICAgfSksXG4gICAgICBjcmVhdGVTdmdJY29uc1BsdWdpbih7XG4gICAgICAgIGljb25EaXJzOiBbcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksIFwic3JjL2Fzc2V0cy9zdmdzXCIpXSxcbiAgICAgICAgc3ltYm9sSWQ6IFwiaWNvbi1bZGlyXS1bbmFtZV1cIixcbiAgICAgIH0pLFxuICAgIF0sXG4gICAgcmVzb2x2ZToge1xuICAgICAgYWxpYXM6IHtcbiAgICAgICAgXCJAXCI6IGZpbGVVUkxUb1BhdGgobmV3IFVSTChcIi4vc3JjXCIsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgICAgfSxcbiAgICB9LFxuICAgIC8vXHU0RTNCXHU5ODk4XHU1QjlBXHU1MjM2KFx1NEUzQlx1OTg5OFx1ODk4Nlx1NzZENilcbiAgICBjc3M6IHtcbiAgICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcbiAgICAgICAgc2Nzczoge1xuICAgICAgICAgIGphdmFzY3JpcHRFbmFibGVkOiB0cnVlLFxuICAgICAgICAgIC8vIFx1ODFFQVx1NTJBOFx1NUJGQ1x1NTE2NVx1NUI5QVx1NTIzNlx1NTMxNlx1NjgzN1x1NUYwRlx1NjU4N1x1NEVGNlx1OEZEQlx1ODg0Q1x1NjgzN1x1NUYwRlx1ODk4Nlx1NzZENlxuICAgICAgICAgIGFkZGl0aW9uYWxEYXRhOiBgICBcbiAgICAgICAgICAgQHVzZSBcIkAvc3R5bGVzL2VsZW1lbnQvaW5kZXguc2Nzc1wiIGFzICo7XG4gICAgICAgICAgIEB1c2UgXCJAL2NvbmZpZy9wdWJsaWMuc2Nzc1wiIGFzICo7XG4gICAgICAgICAgYCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAvL1x1OTE0RFx1N0Y2RVx1NEVFM1x1NzQwNlx1OERFOFx1NTdERlxuICAgIC8vIHNlcnZlcjoge1xuICAgIC8vICAgcHJveHk6IHtcbiAgICAvLyAgICAgW2Vudi5WSVRFX0JBU0VfVVJMXToge1xuICAgIC8vICAgICAgIHRhcmdldDogZW52LlZJVEVfVVJMLFxuICAgIC8vICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAvLyAgICAgICByZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKC9eXFwvYXBpLywgJycpLFxuICAgIC8vICAgICB9LFxuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBa2UsU0FBUyxjQUFjLGVBQWU7QUFDeGdCLFNBQVMsZUFBZSxXQUFXO0FBQ25DLE9BQU8sWUFBWTtBQUNuQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLDJCQUEyQjtBQUNwQyxTQUFTLDRCQUE0QjtBQUNyQyxPQUFPLFVBQVU7QUFDakIsT0FBTyxTQUFTO0FBUnFOLElBQU0sMkNBQTJDO0FBVXRSLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsS0FBSyxNQUFNO0FBRXhDLFFBQU0sTUFBTSxRQUFRLE1BQU0sUUFBUSxJQUFJLENBQUM7QUFDdkMsU0FBTztBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLE1BQ04sTUFBTTtBQUFBO0FBQUEsSUFDUjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsSUFBSTtBQUFBLE1BQ0osT0FBTztBQUFBO0FBQUEsTUFFUCxXQUFXO0FBQUEsUUFDVCxXQUFXO0FBQUEsVUFDVCxvQkFBb0I7QUFBQTtBQUFBLFFBQ3RCO0FBQUEsTUFDRixDQUFDO0FBQUE7QUFBQSxNQUVELFdBQVc7QUFBQSxRQUNULFdBQVcsQ0FBQyxvQkFBb0IsRUFBRSxhQUFhLE9BQU8sQ0FBQyxDQUFDO0FBQUE7QUFBQSxRQUV4RCxNQUFNO0FBQUE7QUFBQSxVQUVKO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQTtBQUFBLFFBRUEsS0FBSztBQUFBLFFBQ0wsTUFBTTtBQUFBLE1BQ1IsQ0FBQztBQUFBLE1BQ0QscUJBQXFCO0FBQUEsUUFDbkIsVUFBVSxDQUFDLEtBQUssUUFBUSxRQUFRLElBQUksR0FBRyxpQkFBaUIsQ0FBQztBQUFBLFFBQ3pELFVBQVU7QUFBQSxNQUNaLENBQUM7QUFBQSxJQUNIO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxPQUFPO0FBQUEsUUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLE1BQ3REO0FBQUEsSUFDRjtBQUFBO0FBQUEsSUFFQSxLQUFLO0FBQUEsTUFDSCxxQkFBcUI7QUFBQSxRQUNuQixNQUFNO0FBQUEsVUFDSixtQkFBbUI7QUFBQTtBQUFBLFVBRW5CLGdCQUFnQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBSWxCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBV0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
