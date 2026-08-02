"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  MoreVertical,
  Pencil,
  Trash2,
  Star,
} from "lucide-react";

export default function NewsActions({
  item,
}: {
  item: any;
}) {
  const router = useRouter();

  const handlePremiumToggle = async () => {
   const res = await fetch(
  `http://localhost:5000/api/v1/news/${item.id}/toggle-premium`,
  {
    method: "PATCH",
    credentials: "include",
  }
);

    const data = await res.json();
    console.log(data);

    if (res.ok) {
      router.refresh();
    }
  };
  const handleDelete = async () => {
  const ok = window.confirm(
    "Are you sure you want to delete this news?"
  );

  if (!ok) return;

  const res = await fetch(
    `http://localhost:5000/api/v1/news/${item.id}`,
    {
      method: "DELETE",
      credentials: "include",
    }
  );

  const data = await res.json();

  console.log(data);

  if (res.ok) {
    router.refresh();
  }
};

return (
  <DropdownMenu>

    <DropdownMenuTrigger asChild>
      <Button
        variant="ghost"
        size="icon"
      >
        <MoreVertical className="h-5 w-5" />
      </Button>
    </DropdownMenuTrigger>


    <DropdownMenuContent align="end">

      <DropdownMenuItem asChild>
        <Link href={`/admin-dashboard/news/${item.id}/edit`}>
          <Pencil className="mr-2 h-4 w-4" />
          Edit
        </Link>
      </DropdownMenuItem>


      <DropdownMenuItem onClick={handlePremiumToggle}>
        <Star className="mr-2 h-4 w-4" />

        {item.isPremium
          ? "Remove Premium"
          : "Make Premium"}

      </DropdownMenuItem>

<DropdownMenuItem
  onClick={handleDelete}
  className="text-red-500"
>
  <Trash2 className="mr-2 h-4 w-4" />
  Delete
</DropdownMenuItem>
    </DropdownMenuContent>

  </DropdownMenu>
);
}