export type TransactionStatus = 'on-track' | 'goal-neutral' | 'worth-discussing'

export type Transaction = {
  name: string
  date: string
  status: TransactionStatus
  amount: number
}

export type GoalProgress = {
  name: string
  percent: number
  color: string
  icon: 'home' | 'plane' | 'piggy-bank'
}

export const SAVINGS_GROWTH_DATA = [
  { month: 'Oct', value: 5200 },
  { month: 'Nov', value: 8100 },
  { month: 'Dec', value: 11800 },
  { month: 'Jan', value: 16200 },
  { month: 'Feb', value: 20100 },
  { month: 'Mar', value: 24500 },
  { month: 'Apr', value: 28200 },
]

export const SPENDING_ALIGNMENT = [
  { label: 'On-Track', percent: 65, color: '#00bfa6' },
  { label: 'Goal-Neutral', percent: 25, color: '#0f2847' },
  { label: 'Worth Discussing', percent: 10, color: '#ffb800' },
]

export const GOAL_PROGRESS: GoalProgress[] = [
  { name: 'House Down Payment', percent: 15, color: 'bg-teal', icon: 'home' },
  { name: 'European Honeymoon', percent: 30, color: 'bg-navy', icon: 'plane' },
  { name: 'Emergency Fund', percent: 34, color: 'bg-amber-500', icon: 'piggy-bank' },
]

export const RECENT_TRANSACTIONS: Transaction[] = [
  { name: 'Grocery Shopping', date: '27/04', status: 'on-track', amount: -145.32 },
  { name: 'Savings Transfer', date: '26/04', status: 'on-track', amount: 1200 },
  { name: 'Restaurant Dinner', date: '25/04', status: 'worth-discussing', amount: -87.5 },
  { name: 'Partner 1 Salary', date: '24/04', status: 'on-track', amount: 4500 },
  { name: 'Utilities', date: '23/04', status: 'on-track', amount: -230 },
  { name: 'Online Shopping', date: '22/04', status: 'goal-neutral', amount: -156.99 },
]

export const STATUS_STYLES: Record<
  TransactionStatus,
  { badge: string; text: string }
> = {
  'on-track': { badge: 'bg-teal/13 text-teal', text: 'On-Track' },
  'goal-neutral': { badge: 'bg-slate-400/13 text-slate-400', text: 'Goal-Neutral' },
  'worth-discussing': { badge: 'bg-warning/13 text-warning', text: 'Worth Discussing' },
}
