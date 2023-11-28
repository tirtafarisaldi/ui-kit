import { ColorsType } from "../Colors";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void | undefined;
  children?: React.ReactNode;
  bgOverlay?: ColorsType;
  isCentered?: boolean;
  isCloseOnOverlayClick?: boolean
}
