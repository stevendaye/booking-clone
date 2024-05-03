import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { BiUser, BiBriefcaseAlt } from "react-icons/bi";
import { IoWalletOutline } from "react-icons/io5";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

export const AccountDropdown = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: (item: string) => void;
}) => {
  const accountList = [
    { id: "1mc", name: "Manage account", href: "#", icon: BiUser },
    { id: "2bt", name: "Bookings & Trips", href: "#", icon: BiBriefcaseAlt },
    { id: "3rw", name: "Rewards & Wallet", href: "#", icon: IoWalletOutline },
    { id: "4so", name: "Sign out", href: "#", icon: LiaSignOutAltSolid },
  ];

  return (
    <Popover className="relative">
      <Popover.Button>{children}</Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute top-14 right-[-4px]">
          <div
            className="w-[250px] flex-auto overflow-hidden rounded-xl bg-white text-sm 
            leading-6 shadow-lg ring-1 text-black"
          >
            <div className="py-4">
              {accountList.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col gap-4 last:mb-0 hover:bg-slate-400/15 px-4 py-3"
                >
                  <button className="flex gap-5">
                    <item.icon
                      className=" text-black"
                      aria-hidden="true"
                      size={25}
                      onClick={() => onClick(item.name)}
                    />
                    <Link to={item.href}>{item.name}</Link>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};
