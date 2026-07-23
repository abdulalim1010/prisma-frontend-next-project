import { getMe } from "@/service/getMe";
import { Button } from "../../components/ui/button";






export default  async function  HomePage() {



  console.log("Root Route")

const user=await getMe()
console.log(user)

  return (
    <div>hello nextjs

<Button variant="outline">Button</Button>
      
    </div>
  );
}