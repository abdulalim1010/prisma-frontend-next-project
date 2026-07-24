"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Menu,
  Zap,
  Home,
  User,
  Settings,
  LayoutDashboard,
  Heart,
  PlusCircle,
  LogOut,
} from "lucide-react"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const navItems = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Properties",
    href: "/properties",
    icon: PlusCircle,
  },
  {
    label: "Favorites",
    href: "/favorites",
    icon: Heart,
  },
]


const userMenuItems = [
  {
    label: "Profile",
    href: "/profile",
    icon: User,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
]


const userSignOutItem = {
  label: "Logout",
  href: "/logout",
  icon: LogOut,
}










type IUser = {
  id: string;
  name: string;
  email: string;
  role: "TENANT" | "LANDLORD" | "ADMIN";
  status: "ACTIVE" | "INACTIVE" | "BLOCKED";
  createdAt: string;
  updatedAt: string;
  profile: {
    id: string;
    photo: string;
    bio: string;
    phone: string;
    address: string;
    userId: string;
    createdAt: string;
    updatedAt: string;
  };
};


type IUserResponse = {
  success: boolean;
  message: string;
  data: IUser;
};


type NavbarProps = {
  user: IUserResponse;
}







  export function Navbar({user}:NavbarProps ) {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">


        {/* Logo */}

        <Link 
          href="/"
          className="flex items-center gap-2"
        >
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Zap className="size-5" />
          </span>

          <span className="text-lg font-bold">
            Alim.dev
          </span>
        </Link>



        {/* Desktop Navigation */}

        <nav className="hidden md:flex items-center gap-1">

          {navItems.map((item)=>{

            const Icon = item.icon
            const active = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition",
                  active
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >

                <Icon className="size-4"/>

                {item.label}

              </Link>
            )
          })}

        </nav>




        <div className="flex items-center gap-2">


          {/* User Dropdown */}

          <DropdownMenu>

            <DropdownMenuTrigger asChild>

              <Button
                variant="ghost"
                className="size-10 rounded-full"
              >

                <Avatar>

                  <AvatarFallback>
                    AA
                  </AvatarFallback>

                </Avatar>

              </Button>

            </DropdownMenuTrigger>



            <DropdownMenuContent align="end" className="w-56">


              <DropdownMenuLabel>

                <div>
                  <p className="font-medium">
                   {user?.data?.name ?? "User"}
                  </p>

                  <p className="text-xs text-muted-foreground">
                  {user?.data?.email ?? "User"}
                  </p>
                </div>

              </DropdownMenuLabel>


              <DropdownMenuSeparator />



              {
                userMenuItems.map((item)=>{

                  const Icon = item.icon

                  return (

                    <DropdownMenuItem
                      key={item.href}
                      asChild
                    >

                      <Link
                        href={item.href}
                        className="flex items-center gap-2 cursor-pointer"
                      >

                        <Icon className="size-4"/>

                        {item.label}

                      </Link>

                    </DropdownMenuItem>

                  )

                })
              }



              <DropdownMenuSeparator />



              {
                (()=>{

                  const Icon = userSignOutItem.icon

                  return (

                    <DropdownMenuItem
                      asChild
                      className="text-destructive"
                    >

                      <Link
                        href={userSignOutItem.href}
                        className="flex items-center gap-2 cursor-pointer"
                      >

                        <Icon className="size-4"/>

                        {userSignOutItem.label}

                      </Link>


                    </DropdownMenuItem>

                  )

                })()
              }



            </DropdownMenuContent>

          </DropdownMenu>





          {/* Mobile Menu */}

          <DropdownMenu>

            <DropdownMenuTrigger asChild>

              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
              >
                <Menu className="size-5"/>
              </Button>

            </DropdownMenuTrigger>



            <DropdownMenuContent align="end">


              {
                navItems.map((item)=>{

                  const Icon = item.icon

                  return (

                    <DropdownMenuItem
                      key={item.href}
                      asChild
                    >

                      <Link
                        href={item.href}
                        className="flex items-center gap-2"
                      >

                        <Icon className="size-4"/>

                        {item.label}

                      </Link>

                    </DropdownMenuItem>

                  )

                })
              }


            </DropdownMenuContent>


          </DropdownMenu>


        </div>


      </div>

    </header>
  )
}