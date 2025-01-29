'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // 在开发环境打印错误到控制台
    console.error('Error:', error)
  }, [error])

  return (
    <div className="p-4">
      <h2 className="text-red-500 text-xl mb-4">出错了！</h2>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <p className="font-bold">错误信息:</p >
        <pre className="whitespace-pre-wrap">{error.message}</pre>
        {error.stack && (
          <>
            <p className="font-bold mt-2">错误堆栈:</p >
            <pre className="whitespace-pre-wrap text-sm">{error.stack}</pre>
          </>
        )}
      </div>
      <button
        onClick={reset}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        重试
      </button>
    </div>
  )
}
