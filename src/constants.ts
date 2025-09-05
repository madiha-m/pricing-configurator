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

// export const navListClass = `
//     hover: bg-transparent,
//     focus: bg-transparent,
//     active: bg-transparent,
//     `.trim()
