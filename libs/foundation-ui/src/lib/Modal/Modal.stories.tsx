import { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Modal from './Modal';
import { View } from '../View';

export default {
  title: 'Foundation/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = ({
  bgOverlay,
  isCloseOnOverlayClick,
  isCentered,
  isOpen
}) => {
  const [isOpenedModal, setIsOpenedModal] = useState(isOpen);

  return (
    <>
      <button onClick={() => setIsOpenedModal(true)}>Click to open modal</button>
      <Modal
        isOpen={isOpenedModal}
        onClose={() => setIsOpenedModal(false)}
        isCloseOnOverlayClick={isCloseOnOverlayClick}
        bgOverlay={bgOverlay}
        isCentered={isCentered}
      >
        <View
          display="inline-block"
          flexDirection="column"
          position="relative"
          width="800px"
          height="auto"
          borderRadius={8}
          backgroundColor="white"
          padding={10}
        >
          <h4>Modal</h4>
          <p>This is for example modal</p>
          <button type="button" onClick={() => setIsOpenedModal(false)}>
            Close
          </button>
        </View>
      </Modal>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  isCloseOnOverlayClick: false,
  bgOverlay: 'gray60',
  isCentered: false,
  isOpen: false
};