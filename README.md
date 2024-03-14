# letou

搬運 https://www.letou.com/ 的站點， 做的架构

## 架构

使用的技術棧： React next.js typescript tailwind react-hook-form
ui組件可以用： daisyui sonner 等，看與搬運站點的適配程度, 還有一些常用組件可以在 https://tailwindcomponents.com/ 類似這種站點搜相關代碼改把改把就行了

- api: api請求數據層
  - typing.d.ts: 所有響應的類型聲明
  - index.ts: api請求的集聚
- app: 頁面路由層
  - fonts: 字體包管理，搬運站點的字體包也需要摳下來存起來
  - api: mock數據層，方便後期替換API請求URL（如：NEXT_PUBLIC_API_BASE_URL）
  - global.css: 全局樣式， 包括去搬運站點複製下來的一些基礎樣式
    - 如 .theme-default 站點如果用到主題變量， 可以直接照搬過來， 後期通過 `text-[var(--primary-color)]` 這樣的类名寫法去適配主題樣式
- components：純組件層
- config: 共用配置
- constants：靜態變量
- context: 使用 React Provider 構建的全局狀態管理
- hooks： 一些hooks的方法
- locales：多語言配置
- routes：路由對應的頁面
- types: 一些類型聲明， 這個可以改成類似 api文件夾的 typing.d.ts 的效果，不用老是導入那麼麻煩
- utils: 工具方法
- templates: 邏輯組件層 & 也有一些頁面路由層的一些通用邏輯組件都往這放