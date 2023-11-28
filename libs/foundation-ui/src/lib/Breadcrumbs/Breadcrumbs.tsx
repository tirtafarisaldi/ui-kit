import { BreadcrumbsItemProps, BreadcrumbsProps } from '.';

import { Icon } from '../Icon';
import { Fragment } from 'react';
import { StyledBreadcrumbs } from './Breadcrumbs.style';
import { Text } from '../Text';
import Link from '../Link/Link';

const Breadcrumbs = (props: BreadcrumbsProps) => {
  const { items, separatorIcon } = props;

  return (
    <StyledBreadcrumbs>
      {items.map((item: BreadcrumbsItemProps, index: number) => (
        <Fragment key={index}>
          <Link {...item.link}>
            <Text {...item.label} />
          </Link>
          {index !== items.length - 1 && <Icon {...separatorIcon} />}
        </Fragment>
      ))}
    </StyledBreadcrumbs>
  );
};

export default Breadcrumbs;
