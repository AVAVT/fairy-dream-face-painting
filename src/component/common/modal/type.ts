import type { HTMLAttributes } from "react";

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  show: boolean;
  inParent?: boolean;
  clickOutsideToClose?: boolean;
  hasCloseButton?: boolean;
  onClose?: () => void;
}
