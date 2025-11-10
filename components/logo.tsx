import { cn } from '@/lib/utils'

export const Logo = ({ className }: { className?: string }) => {
    return (
        <div className={cn('text-2xl font-bold text-foreground', className)}>
            Mind Canvas
        </div>
    )
}

export const LogoIcon = ({ className }: { className?: string }) => {
    return (
        <div className={cn('text-2xl font-bold text-foreground', className)}>
            MC
        </div>
    )
}

export const LogoStroke = ({ className }: { className?: string }) => {
    return (
        <div className={cn('text-2xl font-bold text-foreground', className)}>
            Mind Canvas
        </div>
    )
}