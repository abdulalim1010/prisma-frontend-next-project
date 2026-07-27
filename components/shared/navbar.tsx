"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
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
  NewspaperIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { logout } from "@/service/logout"
import { toast } from "sonner"
import { PersonSimpleSwimIcon } from "@phosphor-icons/react/dist/ssr"

// Adjust this import to wherever your actual logout logic lives
// e.g. a server action, an API call, or next-auth's signOut


const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Properties", href: "/properties", icon: PlusCircle },
  { label: "Favorites", href: "/favorites", icon: Heart },
  { label: "news", href: "/news", icon: NewspaperIcon },
  { label: "premium", href: "/premium", icon: PersonSimpleSwimIcon },
]

const userMenuItems = [
  { label: "Profile", href: "/profile", icon: User },
  { label: "Settings", href: "/settings", icon: Settings },
]

type IUser = {
  id: string
  name: string
  email: string
  role: "TENANT" | "LANDLORD" | "ADMIN"
  status: "ACTIVE" | "INACTIVE" | "BLOCKED"
  createdAt: string
  updatedAt: string
  profile: {
    id: string
    photo: string
    bio: string
    phone: string
    address: string
    userId: string
    createdAt: string
    updatedAt: string
  }
}

type IUserResponse = {
  success: boolean
  message: string
  data: IUser
}

type NavbarProps = {
  user: IUserResponse
}

function getInitials(name?: string) {
  if (!name) return "U"
  return name
    .trim()
    .split(/\s+/)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase()
}

export function Navbar({ user }: NavbarProps) {
  const pathname = usePathname()
  const router = useRouter()
  const [isLoggingOut, setIsLoggingOut] = useState(false)

 const handleLogout = async () => {
  try {
    setIsLoggingOut(true);

    await logout();

    // ✅ Success toast
    toast.success("Logged out successfully");

    router.refresh();
    router.push("/login");
  } catch (error) {
    console.error(error);

    // ❌ Error toast
    toast.error("Logout failed");
  } finally {
    setIsLoggingOut(false);
  }
};

  const initials = getInitials(user?.data?.name)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Zap className="size-5" />
          </span>
          <span className="text-lg font-bold">Alim.dev</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
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
                <Icon className="size-4" />
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          {/* User Dropdown */}
         {user?.success ? (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" className="size-10 rounded-full">
        <Avatar>
          <AvatarImage
            src={user?.data?.profile?.photo}
            alt={user?.data?.name}
          />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
      </Button>
    </DropdownMenuTrigger>

    <DropdownMenuContent align="end" className="w-56">
      <DropdownMenuLabel>
        <div>
          <p className="font-medium">{user.data.name}</p>
          <p className="text-xs text-muted-foreground">
            {user.data.email}
          </p>
        </div>
      </DropdownMenuLabel>

      <DropdownMenuSeparator />

      {userMenuItems.map((item) => {
        const Icon = item.icon

        return (
          <DropdownMenuItem key={item.href} asChild>
            <Link href={item.href}>
              <Icon className="size-4" />
              {item.label}
            </Link>
          </DropdownMenuItem>
        )
      })}

      <DropdownMenuSeparator />

      <DropdownMenuItem
        onSelect={(e) => {
          e.preventDefault()
          handleLogout()
        }}
        className="cursor-pointer text-destructive"
      >
        <LogOut className="mr-2 size-4" />
        Logout
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
) : (
  <div className="flex items-center gap-2">

    <Button asChild variant="outline">
      <Link href="/register">
        Register
      </Link>
    </Button>


    <Button asChild>
      <Link href="/login">
        Login
      </Link>
    </Button>

  </div>
)}

          {/* Mobile Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="size-5" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link href={item.href} className="flex items-center gap-2">
                      <Icon className="size-4" />
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                )
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}