export const Info = ({desc, content, width}) => {
  return (
    <div className={`border border-primary-border relative rounded text-secondary-text ${width}`} >
      <span className="absolute top-[-8px] left-[10px] bg-secondary-bg px-2 text-xs">{desc}</span>
      <div className="py-2 px-4">{content}</div>
    </div>
  );
}

