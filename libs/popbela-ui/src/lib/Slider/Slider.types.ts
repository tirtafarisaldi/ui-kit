import { BreakPoint } from "foundation-ui";



type VariantType = 'headline' | 'exclusive' | 'now-on-popbela' | 'default';
export interface SliderProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode
    variant?: VariantType;
    withDefaultResponsive?: boolean;
    responsive: BreakPoint[]
}