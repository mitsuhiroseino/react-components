import Stack from '@mui/material/Stack';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import clsx from 'clsx';
import { Children, ForwardedRef, forwardRef } from 'react';

import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsTabPanelProps } from './types';

const SsTabPanel = forwardRef((props: SsTabPanelProps | any, ref: ForwardedRef<HTMLDivElement>) => {
  const { className, tabIndex, onChange, tabs, children, ...rest } = props;
  return (
    <Stack ref={ref} className={clsx(CLASS_NAME, className)} spacing={4} direction="column" {...rest}>
      <Stack spacing={8} direction="row">
        <Tabs value={tabIndex} onChange={onChange}>
          {tabs ? tabs.map((tab, i) => <Tab key={i} label={tab.label || tab} />) : null}
        </Tabs>
      </Stack>
      {Children.map(children, (child, i) =>
        tabIndex === i ? (
          <Stack key={i} className={`${CLASS_NAME}-contents`}>
            {child}
          </Stack>
        ) : null,
      )}
    </Stack>
  );
});
SsTabPanel.displayName = DISPLAY_NAME;
export default SsTabPanel;
