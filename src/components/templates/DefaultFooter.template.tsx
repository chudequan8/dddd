import React from "react";
import dayjs from "dayjs";
import Footer, {
  FooterDesktop,
  FooterLeft,
  FooterMobile,
  FooterRight,
} from "../layouts/Footer";
import { NavFooterItem } from "../layouts/Nav"; 
import { headMenuPages } from "@/config/pages.config";

const DefaultFooterTemplate = () => {
  return (
    <Footer>
      <FooterDesktop>
        <FooterLeft className="text-zinc-500">
          <div>Copyright © {dayjs().format("YYYY")}</div>
        </FooterLeft>
        <FooterRight className="text-zinc-500">
          <span>
            <b>Lazada</b> e-commerce
          </span>
        </FooterRight>
      </FooterDesktop>
      <FooterMobile>
        <NavFooterItem icon="item-icon icon-bottom-menu2" text="Menu" isMenu={true} />
        <NavFooterItem
          icon="icon icon-menu-sport"
          text={headMenuPages[0].text}
          to={headMenuPages[0].to}
        />
        <NavFooterItem icon="item-icon icon-top-wallet" text="Wallet" isCenter={true} />
        {headMenuPages.slice(1).map((m) => (
          <NavFooterItem
            key={m.to}
            icon={m.icon}
            text={m.text}
            to={m.to}
          />
        ))}
        {/* <NavFooterItem text={""} /> */}

        {}
      </FooterMobile>
    </Footer>
  );
};

export default DefaultFooterTemplate;
