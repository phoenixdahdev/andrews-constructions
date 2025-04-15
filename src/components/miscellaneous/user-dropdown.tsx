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
import { RiGlobalLine, RiWalletLine, RiLogoutBoxLine } from '@remixicon/react'

export default function UserDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="h-auto rounded-full p-0 hover:bg-transparent"
        >
          <Avatar className="h-[48px] w-[48px] bg-[#E3F2FF] p-1">
            <AvatarImage
              src="https://res.cloudinary.com/dlzlfasou/image/upload/v1741353515/user_i02xph.png"
              width={48}
              height={48}
              alt="Profile image"
              className="rounded-full"
            />
            <AvatarFallback>LB</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-w-64 dark:border-none" align="end">
        <DropdownMenuLabel className="flex min-w-0 flex-col">
          <span className="text-foreground truncate text-sm font-medium">
            Lucy Bennett
          </span>
          <span className="text-muted-foreground truncate text-xs font-normal">
            l.bennett@originui.com
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="dark:bg-white/8" />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <RiGlobalLine size={16} className="opacity-60" aria-hidden="true" />
            <span>Currency</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <RiWalletLine size={16} className="opacity-60" aria-hidden="true" />
            <span>Wallet</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="dark:bg-white/8" />
        <DropdownMenuItem>
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
