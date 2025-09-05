export const fadeBorderBottom = `
  relative
  after:content-['']
  after:absolute
  after:bottom-0
  after:left-0
  after:right-0
  after:h-[1px]
  after:bg-gradient-to-r
  after:from-transparent
  after:via-gray-700
  after:to-transparent
`.trim();

// NAVBAR

export const navTextClass = `
    !text-teal-600 
    font-medium 
    transition-colors 
    duration-300 
    hover:!text-teal-300 
    active:!text-white
    focus:!text-white
    ml-auto
    `.trim();

export const navButtonClass = `
  ${navTextClass}
  !border !border-gray-700
  !bg-[#0a1d2d] 
  !hover:shadow-xl 
  !hover:border-teal-400 
  !transition-all !duration-300
`.trim();

export const navDropdownClass = `
  !bg-[#0a1d2d]
  !border !border-gray-700
  !rounded-xl
  !shadow-lg
`.trim();

export const navDropdownItemClass = `
  ${navTextClass}
  !block
  !px-10 !py-2
  border-b border-gray-700
  last:border-b-0
`.trim();

