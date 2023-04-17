import React, { lazy, createElement } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '@/App.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    lazy: async () => {
      const result = await import('@/App')
      return { Component: result.default }
      // loader:()=>{},
    },
    children: [
      {
        path: "Link",
        lazy: async () => {
          const result = await import('@/views/Link')
          return { Component: result.default }
        },
      },
      {
        path: "Zelda",
        lazy: async () => {
          const result = await import('@/views/Zelda')
          return { Component: result.default }
        },
      },
    ],
  },
]);
export default router
