import { View } from '../View';
import { ModalProps } from './Modal.types';

export function Modal(props: ModalProps) {
  const {
    isOpen = false,
    children,
    isCentered,
    onClose,
    isCloseOnOverlayClick,
    bgOverlay = 'gray60',
  } = props;

  return (
    <View
      display={isOpen ? 'flex' : 'none'}
      width="100vw"
      height="100dvh"
      position="fixed"
      left="0px"
      top="0px"
      bottom="0px"
      right="0px"
      zIndex={1400}
      overflow="auto"
      onClick={() => {
        if (isCloseOnOverlayClick) {
          onClose();
        }
      }}
    >
      <View
        opacity={0.7}
        backgroundColor={bgOverlay}
        width="100vw"
        height="100dvh"
        position="absolute"
      />
      <View
        flexJustifyContent="center"
        marginX="auto"
        marginTop={isCentered ? 'auto' : '4rem'}
        marginBottom="auto"
        display="inline-block"
        onClick={(e: React.MouseEvent<HTMLElement>) => {
          e.stopPropagation();
        }}
      >
        {children}
      </View>
    </View>
  );
}

export default Modal;
