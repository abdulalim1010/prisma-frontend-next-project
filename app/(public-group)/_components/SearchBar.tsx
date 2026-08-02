"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


export default function SearchBar({
  path,
}: {
  path: string;
}) {

  const router = useRouter();
  const searchParams = useSearchParams();


  const [search, setSearch] = useState(
    searchParams.get("search") || ""
  );


  const handleSearch = (
    e: React.FormEvent
  ) => {

    e.preventDefault();


    if(search.trim()){

      router.push(
        `${path}?search=${encodeURIComponent(search)}`
      );

    }else{

      router.push(path);

    }

  };


  return (

    <form
      onSubmit={handleSearch}
      className="flex gap-2"
    >

      <Input
        placeholder="Search news..."
        value={search}
        onChange={(e)=>
          setSearch(e.target.value)
        }
      />


      <Button type="submit">

        <Search className="h-4 w-4 mr-2"/>

        Search

      </Button>


    </form>

  );
}