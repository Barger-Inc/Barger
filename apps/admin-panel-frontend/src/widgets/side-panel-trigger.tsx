"use client"

import { sidePanelLinks } from "@/features/navigation/lib/side-panel-links"
import { Header } from "@/shared/ui/header"
import { SidePanel } from "@/widgets/side-panel"
import { FloatingPortal } from "@floating-ui/react"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

export const SidePanelTrigger = () => {
  const [isOpened, setIsOpened] = useState(false)

  return (
    <>
      <Header variant={"hamburger"} onClose={() => setIsOpened(!isOpened)} />

      <AnimatePresence>
        {isOpened && (
          <FloatingPortal root={document.getElementById("root")}>
            <motion.div
              initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
              animate={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
              exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
              className="fixed inset-0"
              onClick={() => setIsOpened(false)}
              transition={{
                duration: 0.6,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                className="flex"
                transition={{
                  duration: 0.6,
                  ease: [0.43, 0.13, 0.23, 0.96],
                }}
              >
                <SidePanel
                  headerVariant={"hamburger"}
                  links={sidePanelLinks}
                  onClose={() => setIsOpened(false)}
                />
              </motion.div>
            </motion.div>
          </FloatingPortal>
        )}
      </AnimatePresence>
    </>
  )
}
