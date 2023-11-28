import { StyledBreadcrumbs } from './Breadcrumbs.style';
import { Breadcrumbs as FoundationBreadcrumbs } from 'foundation-ui';
import { BreadcrumbsProps } from './Breadcrumbs.type';
const IconDivider: string =
  require('../../../assets/icons/divider-breadcrumbs.svg').default;

export function Breadcrumbs(props: BreadcrumbsProps) {
  return (
    <StyledBreadcrumbs>
      <FoundationBreadcrumbs
        separatorIcon={{
          icon: IconDivider,
          size: 'xs',
        }}
        {...props}
      />
    </StyledBreadcrumbs>
  );
}

export default Breadcrumbs;
