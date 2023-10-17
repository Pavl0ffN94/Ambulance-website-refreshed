import {ReactNode} from 'react'

export interface IPriceCardProps {
  headline: string;
  clarification1: string;
  cost1: string;
  clarification2?: string;
  cost2?: string;
  id: number;
  children: ReactNode,
} 