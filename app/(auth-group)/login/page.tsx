import { LoginForm } from "../_components/Loginform";




export default function LoginPage() {

  return (
    <>
    <div className="flex min-h-screen items-center justify-center ">
<div className="w-full max-w-md space-y-6 rounded-lg befor p-8 shadow-lg">
{/* From generetiq */}

<div className="space-y-2 text-center">
  <h1 className="text-3xl font-bold ">
Welcome Back!
  </h1>
  <p className="text-gray-500">Enter credential to access your account</p>
  
</div>

<LoginForm/>
</div>





    </div>
    
    
    
    </>
  )
}
