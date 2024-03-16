import React from "react";
import { asidePages } from "@/config/pages.config";
import { useRouter } from "next/navigation";
import Aside, { AsideBody, AsideHead } from "../layouts/aside/Aside";
import Nav, { NavCollapse, NavItem } from "../layouts/Nav";
import DarkModeSwitcherPart from "../layouts/aside/DarkModeSwitcher.part";
import LogoAndAsideTogglePart from "../layouts/aside/LogoAndAsideToggle.part";
import LanguageSelectPart from "../layouts/aside/LanguageSelect.part";
import question from '@/newAssets/img/quests-7ae7831a.webp';
import Image from "next/image";
const DefaultAsideTemplate = () => {
  const router = useRouter();

  return (
    <Aside>
      <AsideHead>
        <LogoAndAsideTogglePart />
      </AsideHead>
      <AsideBody>
        <Nav>

					<div className='w-full rounded-[4px] bg-[#F6F7FA] py-[8px] dark:bg-[#24262B]'>

						<div className='flex h-[42px]  w-full items-center justify-between gap-[8px] px-[8px] '>
							<div className='qeust-bg flex h-full w-full  items-center rounded-[4px] cursor-pointer' style={{
                background: 'linear-gradient(26.79deg,rgba(109,43,255,.480402) 1.86%,rgba(109,43,255,.04) 85.25%,rgba(109,43,255,.04) 85.25%),rgba(216,216,216,.05)'
              }}>
								<Image className='ml-[10px] w-[38px]' src={question} alt=''></Image>

								<div className='text-[10px] font-[700] text-[#000] dark:text-[#fff]'>
									QUEST
								</div>
							</div>

							<div className='spin-bg flex h-full w-full items-center rounded-[4px] cursor-pointer' style={{
                background: 'linear-gradient(19.92deg,rgba(175,13,132,.511772) -6.45%,rgba(175,13,132,.04) 78.77%),rgba(216,216,216,.05)'
              }}>
								<Image className='ml-[10px] w-[38px]' src={question} alt=''></Image>

								<div className='text-[10px] font-[700] text-[#000] dark:text-[#fff]'>
									SPIN
								</div>
							</div>
						</div>
					</div>
          {asidePages.map((p, i) => {
            if (p.subPages) {
              return (
                <NavCollapse key={p.to} text={p.text} to={p.to} icon={p.icon}>
                  {p.subPages.map((_p, _i) => (
                    <NavItem key={_p.to} isSub={true} {..._p} />
                  ))}
                </NavCollapse>
              );
            } else {
              return <NavItem key={p.to} {...p} />;
            }
          })}
          <LanguageSelectPart />
          <DarkModeSwitcherPart />
        </Nav>
      </AsideBody>
    </Aside>
  );
};

export default DefaultAsideTemplate;
