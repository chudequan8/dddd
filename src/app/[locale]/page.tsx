'use client'

import LoginModal from "@/components/templates/LoginModal";
import { useMaskProps } from "@/components/ui/Mask";


export default function Home() {
  const loginModalProps = useMaskProps()
  const { setOpen: setLoginModalOpen } = loginModalProps

  return (
    <>
      <button onClick={() => {
        setLoginModalOpen(true)
      }}>
        打開登錄彈窗
      </button>

      <LoginModal {...loginModalProps} />
    </>
  );
}
