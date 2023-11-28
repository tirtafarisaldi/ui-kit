import { TextProps } from './Text.types';
import { StyledText } from './Text.style';

const Text = (props: TextProps) => {
  const {
    as = 'label',
    className,
    children,
    fontSize,
    fontColor,
    fontWeight,
    fontStyle,
    style,
  } = props;
  return (
    <StyledText
      as={as}
      className={className}
      fontSize={fontSize}
      fontColor={fontColor}
      fontWeight={fontWeight}
      fontStyle={fontStyle}
      style={style}
    >
      {children}
    </StyledText>
  );
};

export default Text;
