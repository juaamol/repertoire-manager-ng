export const BREAKPOINTS = {
  medium: '(min-width: 768px) and (max-width: 1024px)',
  large: '(min-width: 1024px)',
} as const;

export interface MatchingBreakpoints {
  isMedium: boolean;
  isLarge: boolean;
}
