import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import dayjs from 'dayjs'
import zhCN from 'antd/locale/zh_CN'
import router from './router'
import styleVariables from '@/assets/style/variables.scss.js'
import { ConfigProvider } from 'antd'
import { App as AntdApp } from 'antd'
import 'dayjs/locale/zh-cn'
import '@/assets/style/index.scss'
import 'antd/dist/reset.css';
import { RouterProvider } from "react-router-dom";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider
      locale={zhCN}
      theme={{
        token: {
          ...styleVariables
        }
      }}
    >
      <AntdApp>
        <RouterProvider router={router}></RouterProvider>
      </AntdApp>
    </ConfigProvider>
  </React.StrictMode>,
)
