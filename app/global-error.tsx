'use client'
 
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="p-4">
          <h2 className="text-red-500 text-xl mb-4">严重错误！</h2>
          <div className="bg-gray-100 p-4 rounded mb-4">
            <pre className="whitespace-pre-wrap">{error.message}</pre>
            {error.stack && (
              <pre className="whitespace-pre-wrap text-sm mt-2">{error.stack}</pre>
            )}
          </div>
          <button
            onClick={() => reset()}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            重试
          </button>
        </div>
      </body>
    </html>
  )
}
