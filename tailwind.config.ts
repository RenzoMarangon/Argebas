// tailwind.config.js
theme: {
  extend: {
    keyframes: {
      overlayShow: { from: { opacity: 0 } to: { opacity: 1 } }
      overlayHide: { from: { opacity: 1 } to: { opacity: 0 } }

      sheetInLeft: {
        from: { transform: "translateX(-100%)" }
        to: { transform: "translateX(0)" }
      }
      sheetOutLeft: {
        from: { transform: "translateX(0)" }
        to: { transform: "translateX(-100%)" }
      }
    }
    animation: {
      overlayShow: "overlayShow 200ms ease-out"
      overlayHide: "overlayHide 200ms ease-in"
      sheetInLeft: "sheetInLeft 250ms ease-out"
      sheetOutLeft: "sheetOutLeft 200ms ease-in"
    }
  }
}
