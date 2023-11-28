import { TabProps } from './Tab.types';
import { View } from '../View';
import { forwardRef } from 'react';
import { Button } from '../Button';
import { Text } from '../Text';
import { StyledButtonTab } from './Tab.style';

const Tab = forwardRef<HTMLDivElement, TabProps>((props, ref) => {
  const {
    children,
    className,
    navProps,
    style,
    isActive,
    onClick,
    contentProps,
    size,
    id,
  } = props;

  return (
    <View ref={ref} id={id}>
      <StyledButtonTab
        isActive={isActive}
        hoverColor={navProps.hoverColor}
        activeColor={navProps.activeColor}
      >
        <Button
          className={className}
          style={style}
          size={size}
          onClick={onClick}
        >
          <Text {...navProps.title} />
        </Button>
      </StyledButtonTab>

      <View {...contentProps} display={isActive ? 'block' : 'none'}>
        {children}
      </View>
    </View>
  );
});

export default Tab;
