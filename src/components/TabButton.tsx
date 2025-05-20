import SVGIcon, { IconType } from "./svgs/Index";

type TabButtonProps = {
  name: IconType;
  className?: string;
  classes?: string;
  textClasses?: string;
}

export default function TabButton(
  {
    name,
    className = '',
    classes = '',
    textClasses = ''
  }: TabButtonProps) {

  return (
    <div 
    title={name}
    className={`${classes} text-xs flex items-center gap-3 cursor-pointer rounded-lg transition-all duration-300 p-3 w-full hover:bg-[#F6F6F6]`}>
      <SVGIcon type={name} className={className} />
      <span className={textClasses}>{name}</span>
    </div>
  )
}