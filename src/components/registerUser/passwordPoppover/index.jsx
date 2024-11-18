import * as Popover from '@radix-ui/react-popover';

export const PasswordPopover = (passwordRequirements) => (
  <Popover.Root>
    <Popover.Trigger asChild>
      <button
        className="inline-flex size-[35px] cursor-default items-center justify-center rounded-full bg-white text-violet11 shadow-[0_2px_10px] shadow-blackA4 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black"
        aria-label="Update dimensions"
      ></button>
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content
        className="w-[260px] rounded bg-white p-5 shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] will-change-[transform,opacity] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)] data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=top]:animate-slideDownAndFade"
        sideOffset={5}
      >
        <div className="mt-2 p-2 bg-green-100 rounded text-green-700 text-sm">
          <p>
            A senha deve conter:
            <ul className="list-disc pl-5">
              <li
                className={
                  passwordRequirements.hasUppercase
                    ? 'text-green-700'
                    : 'text-red-500'
                }
              >
                Uma letra maiúscula
              </li>
              <li
                className={
                  passwordRequirements.hasLowercase
                    ? 'text-green-700'
                    : 'text-red-500'
                }
              >
                Uma letra minúscula
              </li>
              <li
                className={
                  passwordRequirements.hasNumber
                    ? 'text-green-700'
                    : 'text-red-500'
                }
              >
                Um número
              </li>
              <li
                className={
                  passwordRequirements.hasSpecialChar
                    ? 'text-green-700'
                    : 'text-red-500'
                }
              >
                Um caractere especial
              </li>
            </ul>
          </p>
        </div>
        <Popover.Close
          className="absolute right-[5px] top-[5px] inline-flex size-[25px] cursor-default items-center justify-center rounded-full text-violet11 outline-none hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7"
          aria-label="Close"
        ></Popover.Close>
        <Popover.Arrow className="fill-white" />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);
