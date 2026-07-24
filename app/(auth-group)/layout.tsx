import { Navbar } from "@/components/shared/navbar";
import { getMe } from "@/service/getMe";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const user=await getMe()
  return (
    <div className="mx-auto max-w-7xl bg-red-400 min-h-screen">
<Navbar user={user}/>


      {children}
    </div>
  );
}