export const Wrapper = ({ children }) => {
  return (
    <div className="flex flex-col gap-2 max-w-screen-xl mx-auto s:px-2 px-0 min-h-screen">
      {children}
    </div>
  )
}
