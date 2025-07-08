import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 transform-gpu transition-all duration-200 hover:scale-105 active:scale-95",
  {
    variants: {
      variant: {
        default:
          'bg-black text-white shadow hover:bg-white hover:text-black border border-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white dark:border-white',
        outline:
          'border border-black bg-transparent text-black shadow hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black',
        ghost: 'bg-transparent text-black hover:bg-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black',
        link: 'text-black underline-offset-4 hover:underline dark:text-white',
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
