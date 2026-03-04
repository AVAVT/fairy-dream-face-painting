import { cn } from "@/lib/utils";
import type { ModalProps } from "./type";

export function Modal({
  show,
  children,
  clickOutsideToClose = false,
  hasCloseButton = true,
  inParent = false,
  onClose,
  className,
  ...props
}: ModalProps) {
  const modalBody = (
    <div
      className={cn(
        "w-[60rem] max-w-full p-4 rounded-md shadow-lg bg-background relative",
        className,
      )}
      {...(clickOutsideToClose
        ? {
            onClick: (e) => {
              e.stopPropagation();
            },
          }
        : {})}
      {...props}
    >
      {hasCloseButton && (
        <button
          type="button"
          className="absolute top-4 right-4 cursor-pointer hover:font-bold focus:font-bold bg-transparent border-0"
          onClick={onClose}
        >
          X
        </button>
      )}
      {children}
    </div>
  );

  return !show ? null : inParent ? (
    modalBody
  ) : (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/70"
      {...(clickOutsideToClose
        ? {
            onClick: onClose,
            role: "button",
          }
        : {})}
    >
      {modalBody}
    </div>
  );
}
