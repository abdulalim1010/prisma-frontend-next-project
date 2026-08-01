"use client";


import {
 DropdownMenu,
 DropdownMenuContent,
 DropdownMenuItem,
 DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


import { Button } from "@/components/ui/button";


import {
 MoreVertical,
 Pencil,
 Trash2,
 Star
} from "lucide-react";
import Link from "next/link";



export default function NewsActions({
    
 item
 
}:{
 item:any
}){


return (

<DropdownMenu>


<DropdownMenuTrigger asChild>

<Button
variant="ghost"
size="icon"
>

<MoreVertical/>

</Button>


</DropdownMenuTrigger>



<DropdownMenuContent align="end">


<DropdownMenuItem asChild>

<Link href={`/admin-dashboard/news/${item.id}/edit`}>

<Pencil className="mr-2 h-4 w-4"/>

Edit

</Link>

</DropdownMenuItem>



<DropdownMenuItem>


<Star className="mr-2 h-4 w-4"/>


{
item.isPremium
?
"Remove Premium"
:
"Make Premium"
}


</DropdownMenuItem>



<DropdownMenuItem
className="text-red-500"
>


<Trash2 className="mr-2 h-4 w-4"/>

Delete


</DropdownMenuItem>


</DropdownMenuContent>


</DropdownMenu>

)

}