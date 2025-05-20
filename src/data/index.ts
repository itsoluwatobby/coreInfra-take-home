export const SideBarTabs = [
  "Branches",
  "Roles",
  "Users",
  "Card Scheme",
  "Card Profile",
  "Card Request",
  "Stock",
  "Cards",
  "Authorization List",
  "Authorization Queue",
  "Trail",
  "Account"
] as const;

export const StatusColor = {
  'Ready': {
    text: 'text-[#067647]',
    bg: 'bg-[#ECFDF3]',
    border: 'border-[#ABEFC6]'
  },
  'In Progress': {
    text: 'text-[#B54708]',
    bg: 'bg-[#FFFAEB]',
    border: 'border-[#FEDF89]'
  },
  'Acknowledged': {
    text: 'text-[#175CD3]',
    bg: 'bg-[#EFF8FF]',
    border: 'border-[#B2DDFF]'
  },
  'Pending': {
    text: 'text-[#344054]',
    bg: 'bg-[#F9FAFB]',
    border: 'border-[#EAECF0]'
  },
} as const;