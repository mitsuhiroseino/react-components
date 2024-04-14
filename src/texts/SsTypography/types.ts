import { TypographyProps } from '@mui/material/Typography';

export type SsTypographyProps = TypographyProps & {
  children?: string;
  highlights?: string[];
};
