"use client"

import React, { useState } from "react"
import { Dialog, DialogContent } from "./ui/dialog"
import SignInDialog from "./sign-in-dialog"

interface HomeSigninTriggerProps {
  showParams: {
    showSignIn: boolean | undefined
  }
}

const HomeSigninTrigger = ({ showParams }: HomeSigninTriggerProps) => {
  const [signInDialogIsOpen, setSignInDialogIsOpen] = useState(
    showParams.showSignIn,
  )
  return (
    <Dialog
      open={signInDialogIsOpen}
      onOpenChange={(open) => setSignInDialogIsOpen(open)}
    >
      <DialogContent className="w-[90%] rounded-lg">
        <SignInDialog />
      </DialogContent>
    </Dialog>
  )
}

export default HomeSigninTrigger
