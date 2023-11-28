type ButtonType = 'default' | 'load-more' | 'link';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode
    variant?: ButtonType;
    isLoading?: boolean;
}