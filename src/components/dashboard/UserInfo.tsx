
type UserInfoProps = {
  name?: string;
  lastLogin?: string;
}

export default function UserInfo({ name, lastLogin }: UserInfoProps) {
  return (
    <div className="flex flex-col gap-1">
      <h3 className='font-bold text-lg'>Hi {name ?? 'dear'}, what would you like to do today?</h3>
      <span className="text-xs text-[#121212] font-medium">Last Login: {lastLogin}</span>
    </div>
  )
}