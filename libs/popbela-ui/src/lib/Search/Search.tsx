import type { SearchProps } from './Search.types';
import { StyledBtn, StyledSearch, StyledSpan } from './Search.style';
import { Icon, Input, composeRef } from 'foundation-ui';
import { forwardRef, useRef } from 'react';
const IconSearch: string = require('../../../assets/icons/search.svg').default;

const Search = forwardRef<HTMLInputElement, SearchProps>((props, ref) => {
  const {
    id,
    width = '100%',
    height,
    backgroundBtn = 'gray30',
    borderRadius = 6,
    onSearch: customOnSearch,
    onSubmit,
    ...rest
  } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  const onSearch = (
    e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (customOnSearch && inputRef.current?.value) {
      customOnSearch(inputRef.current?.value, e);
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <StyledSearch
        id={id}
        as="div"
        width={width}
        height={height}
        backgroundBtn={backgroundBtn}
      >
        <Input
          ref={composeRef<HTMLInputElement>(inputRef, ref)}
          borderRightWidth={0}
          borderLeftWidth={1}
          borderTopWidth={1}
          borderBottomWidth={1}
          borderStyle="solid"
          borderTopRightRadius={0}
          borderBottomRightRadius={0}
          borderTopLeftRadius={borderRadius}
          borderBottomLeftRadius={borderRadius}
          style={{ flex: 1 }}
          {...rest}
        />
        <StyledSpan
          backgroundBtn={backgroundBtn}
          borderRadius={borderRadius}
          style={{ width: height, height: height }}
        >
          <StyledBtn
            type="button"
            aria-label="search-btn"
            name="search-btn"
            onClick={onSearch}
          >
            <Icon size="md" icon={IconSearch} tintColor="white" />
          </StyledBtn>
        </StyledSpan>
      </StyledSearch>
    </form>
  );
});

export default Search;
