"use client";

import { Layout } from "antd";
import { navLinkClass } from "@/constants";
import { Typography } from "antd";

const { Footer: AntFooter } = Layout;
const { Title } = Typography;

const AppFooter = () => {
  return (
    <AntFooter className="!bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 */}
        <div>
          <div>
            <Title
              level={4}
              className="!text-white !mb-4"
            >
              Community
            </Title>
            <ul className="space-y-2">
              <li className={navLinkClass}>Tutorials</li>
              <li className={navLinkClass}>Documentation</li>
              <li className={navLinkClass}>Forum</li>
            </ul>
          </div>
          <div>
            <Title
              level={4}
              className="!text-white !mb-4"
            >
              Open Source
            </Title>
            <ul className="space-y-2">
              <li className={navLinkClass}>Download</li>
              <li className={navLinkClass}>Github</li>
              <li className={navLinkClass}>Runbot</li>
              <li className={navLinkClass}>Translations</li>
            </ul>
          </div>
        </div>
        {/* Column 2 */}
        <div>
          <Title
            level={4}
            className="!text-white !mb-4"
          >
            Services
          </Title>
          <ul className="space-y-2">
            <li className={navLinkClass}>Odoo.sh Hosting</li>
            <li className={navLinkClass}>Support</li>
            <li className={navLinkClass}>Upgrade</li>
            <li className={navLinkClass}>Custom Developments</li>
            <li className={navLinkClass}>Education</li>
            <li className={navLinkClass}>Find an Accountant</li>
            <li className={navLinkClass}>Find a Partner</li>
            <li className={navLinkClass}>Become a Partner</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <Title
            level={4}
            className="!text-white !mb-4"
          >
            About us
          </Title>
          <ul className="space-y-2">
            <li className={navLinkClass}>Our company</li>
            <li className={navLinkClass}>Brand Assets</li>
            <li className={navLinkClass}>Contact us</li>
            <li className={navLinkClass}>Jobs</li>
            <li className={navLinkClass}>Events</li>
            <li className={navLinkClass}>Podcast</li>
            <li className={navLinkClass}>Blog</li>
            <li className={navLinkClass}>Customers</li>
            <li className={navLinkClass}>Legal • Privacy</li>
            <li className={navLinkClass}>Security</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center text-sm py-4 px-4 !text-white">
        © {new Date().getFullYear()} Pricing Configurator. All rights reserved.
      </div>
    </AntFooter>
  );
};

export default AppFooter;
