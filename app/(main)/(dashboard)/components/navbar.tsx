import { Plus } from "lucide-react";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

import { FormPopover } from "@/components/form/form-popover";
import Search from "./search";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";

export const Navbar = () => {
  // const { userMemberships, isLoaded: isLoadedOrgList } = useOrganizationList({
  //   userMemberships: {
  //     infinite: true,
  //   },
  // });
  // const router = useRouter();

  // const handleSelect = (organizationId: string) => {
  //   router.push(`/organization/${organizationId}`);
  // };

  return (
    <nav className="fixed z-50 top-0 px-4 w-full h-14 border-b shadow-sm bg-white flex items-center">
      <div className="flex items-center gap-x-4">
        <div className="hidden md:flex">
          <img src="/Trello-logo.png" className="h-20 w-40" />
        </div>

        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl="/organization/:id"
          afterLeaveOrganizationUrl="/select-org"
          afterSelectOrganizationUrl="/organization/:id"
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            },
          }}
        />

        <div className="font-medium text-xs flex items-center mb-1">
          <span className="pl-4">Workspaces</span>
          <Button
            asChild
            type="button"
            size="icon"
            variant="ghost"
            className="ml-auto"
          >
            <Link href="/select-org">
              <Plus className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* <div className="board">
          <Select onValueChange={handleSelect}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Board" />
            </SelectTrigger>
            <SelectContent>
              {userMemberships?.data?.map(({ organization }) => (
                <SelectItem value={organization.id}>
                  {organization.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div> */}

        <Search />
        <FormPopover>
          <Button
            variant="primary"
            size="sm"
            className="rounded-sm block md:hidden"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </FormPopover>
      </div>
      <div className="ml-auto flex items-center gap-x-2">
        <FormPopover align="start" side="bottom" sideOffset={18}>
          <Button
            size="sm"
            className="rounded-sm hidden md:block h-auto  py-1.5 px-2"
          >
            Create New Board
          </Button>
        </FormPopover>

        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: {
                height: 30,
                width: 30,
              },
            },
          }}
        />
      </div>
    </nav>
  );
};
