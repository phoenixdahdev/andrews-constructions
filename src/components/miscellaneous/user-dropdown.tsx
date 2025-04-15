import { Avatar, AvatarFallback, AvatarImage } from 'ui/avatar'
import { Button } from 'ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from 'ui/dropdown-menu'
import { RiLogoutBoxLine } from '@remixicon/react'
import { useSession, signOut } from 'next-auth/react'
import { User } from 'lucide-react'

export default function UserDropdown() {
  const { data } = useSession()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="h-auto rounded-full p-0 hover:bg-transparent"
        >
          <Avatar className="h-[48px] w-[48px] bg-[#E3F2FF] p-1">
            <AvatarImage
              src={data?.user.profile_image ?? (data?.user.image as string)}
              width={48}
              height={48}
              alt="Profile image"
              className="rounded-full"
            />
            <AvatarFallback>{data?.user.name.charAt(0)}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-w-64 dark:border-none" align="end">
        <DropdownMenuLabel className="flex min-w-0 flex-col">
          <span className="text-foreground truncate text-sm font-medium">
            {data?.user.name}
          </span>
          <span className="text-muted-foreground truncate text-xs font-normal">
            {data?.user.email}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="dark:bg-white/8" />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User size={16} className="opacity-60" aria-hidden="true" />
            <span>Profile</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="dark:bg-white/8" />
        <DropdownMenuItem onClick={() => signOut({ redirectTo: '/' })}>
          <RiLogoutBoxLine
            size={16}
            className="opacity-60"
            aria-hidden="true"
          />
          <span>Sign out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
