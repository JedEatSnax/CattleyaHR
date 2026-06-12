import { lazy, Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { TooltipProvider } from "@/components/ui/tooltip"
import ErrorBoundary from "@/components/error-boundary"

const Login = lazy(() => import("@/pages/Login"))
const Registration = lazy(() => import("@/pages/Registration"))
const ForgotPassword = lazy(() => import("@/pages/ForgotPassword"))
const Dashboard = lazy(() => import("@/pages/Dashboard"))
const Home = lazy(() => import("@/pages/Home"))
const Organization = lazy(() => import("@/pages/Organization"))
const Hiring = lazy(() => import("@/pages/Hiring"))
const Reports = lazy(() => import("@/pages/Reports"))
const Documents = lazy(() => import("@/pages/Documents"))
const Account = lazy(() => import("@/pages/Account"))
const Settings = lazy(() => import("@/pages/Settings"))
const Notifications = lazy(() => import("@/pages/Notifications"))

export function App() {
  return (
    <ErrorBoundary>
      <TooltipProvider>
        <Suspense fallback={<Skeleton />}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navigate to="/login" replace />} />
              <Route path="/login" element={<Login />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/home" element={<Home />} />
              <Route path="/organization" element={<Organization />} />
              <Route path="/hiring" element={<Hiring />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/documents" element={<Documents />} />
              <Route path="/account" element={<Account />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/notifications" element={<Notifications />} />
            </Routes>
          </BrowserRouter>
        </Suspense>
      </TooltipProvider>
    </ErrorBoundary>
  )
}

export default App
