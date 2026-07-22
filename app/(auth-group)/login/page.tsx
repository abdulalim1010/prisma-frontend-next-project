import { LoginForm } from "@/components/login-form"

export default function LoginPage() {

    console.log(process.env.BACKEND_API_URL)
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  )
}
