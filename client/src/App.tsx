import { lazy, Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import ErrorBoundary from "@/components/error-boundary"

const Login = lazy(() => import("@/pages/Login"))
const Registration = lazy(() => import("@/pages/Registration"))

export function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Skeleton />}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </ErrorBoundary>
  )
}

export default App
