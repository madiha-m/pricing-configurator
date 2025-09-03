"use client";

import { Layout, Menu, Dropdown, Button } from "antd";
import Link from "next/link";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import Image from "next/image"
import { navLinkClass } from '@/constants';

const { Header: AntHeader } = Layout;

const menuItems = [
  { key: "1", label: <Link href="/" className={navLinkClass}>Home</Link> },
  { key: "2", label: <Link href="/pricing" className={navLinkClass}>Pricing</Link> },
  { key: "3", label: <Link href="/about" className={navLinkClass}>About</Link> },
];

const AppHeader = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const dropdownMenu = (
    <Menu
      theme="dark"
      items={menuItems}
      onClick={() => setDropdownVisible(false)}
    />
  );

  return (
    <AntHeader className="flex items-center bg-[var(--background)] px-4 h-16">
      {/* LOGO */}
      <div className="text-[20px] font-bold mr-10 flex-shrink-0">
        <Link
          href="/"
          className="flex items-center"
        >
          <div className="w-[40px] h-[40px] mr-2 flex items-center">
            <Image
              priority
              src="/logo.svg"
              alt="Pricing Configurator Logo"
              width={80}
              height={40}
              className="w-full h-auto"
            />
          </div>
        </Link>
      </div>
      {/* DESKTOP MENU */}
      <nav className="hidden md:flex flex-1">
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={menuItems}
          className="flex-1"
        />
      </nav>
      {/* SIGNIN BUTTON - DESKTOP ONLY */}
      <div className="hidden md:block ml-auto">
        <Link
          href="/"
          className={navLinkClass}
        >
          Sign In
        </Link>
      </div>
      {/* HAMBURGER MENU + DDL - MOBILE ONLY */}
      <div className="md:hidden ml-auto">
        <Dropdown
          menu={{ items: menuItems }}
          trigger={["click"]}
          open={dropdownVisible}
          onOpenChange={(flag) => setDropdownVisible(flag)}
          placement="bottomRight"
        >
          <Button
            type="primary"
            icon={<MenuOutlined />}
          />
        </Dropdown>
      </div>
    </AntHeader>
  );
};

export default AppHeader;
