import { getMe } from "@/service/getMe";

export default  async function UserDashboard(){





      const user = await getMe()

  console.log("USER:",user)
    return(
        <div>user dashboard</div>



    )
}
