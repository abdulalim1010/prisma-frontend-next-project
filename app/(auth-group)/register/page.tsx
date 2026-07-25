import RegisterForm from "../_components/RegisterForm";



const RegisterPage = () => {

  return (
    <div className="flex min-h-screen items-center justify-center">

      <div className="w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-5">
          Create Account
        </h1>

        <RegisterForm/>

      </div>

    </div>
  );
};


export default RegisterPage;