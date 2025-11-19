import React, { useEffect, useRef } from 'react'

export default function UXChrome() {
  // custom cursor
  useEffect(() => {
    const cursor = document.createElement('div')
    cursor.setAttribute('id', 'cursor-dot')
    cursor.style.cssText = `position: fixed; left:0; top:0; width:10px; height:10px; border-radius:9999px; pointer-events:none; z-index:9999; transform: translate(-50%,-50%); background: transparent; box-shadow: 0 0 0 1px rgba(255,255,255,0.5);`
    const cursorBig = document.createElement('div')
    cursorBig.setAttribute('id', 'cursor-ring')
    cursorBig.style.cssText = `position: fixed; left:0; top:0; width:36px; height:36px; border-radius:9999px; pointer-events:none; z-index:9998; transform: translate(-50%,-50%); background: rgba(59,130,246,0.12); box-shadow: 0 0 20px rgba(59,130,246,0.35) inset, 0 0 0 1px rgba(255,255,255,0.15); filter: blur(0.2px); transition: width .2s, height .2s, background .2s;`
    document.body.appendChild(cursor)
    document.body.appendChild(cursorBig)

    const move = (e) => {
      const { clientX:x, clientY:y } = e
      cursor.style.left = x + 'px'
      cursor.style.top = y + 'px'
      cursorBig.style.left = x + 'px'
      cursorBig.style.top = y + 'px'
    }
    window.addEventListener('mousemove', move)

    // hover grow
    const enter = (e) => {
      const t = e.target.closest('[data-cursor]')
      if (t) {
        cursorBig.style.width = '56px'
        cursorBig.style.height = '56px'
        cursorBig.style.background = 'rgba(59,130,246,0.2)'
      }
    }
    const leave = (e) => {
      const t = e.target.closest('[data-cursor]')
      if (t) {
        cursorBig.style.width = '36px'
        cursorBig.style.height = '36px'
        cursorBig.style.background = 'rgba(59,130,246,0.12)'
      }
    }
    document.addEventListener('mouseover', enter)
    document.addEventListener('mouseout', leave)

    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', enter)
      document.removeEventListener('mouseout', leave)
      cursor.remove()
      cursorBig.remove()
    }
  }, [])

  // scroll progress indicator
  useEffect(() => {
    const bar = document.createElement('div')
    bar.style.cssText = 'position:fixed;inset:0 auto auto 0;height:3px;width:0;background:linear-gradient(90deg,#60a5fa,#22d3ee);z-index:50;box-shadow:0 0 12px rgba(96,165,250,.6)'
    document.body.appendChild(bar)

    const onScroll = () => {
      const h = document.documentElement
      const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight)
      bar.style.width = (scrolled * 100) + '%'
    }
    window.addEventListener('scroll', onScroll)
    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
      bar.remove()
    }
  }, [])

  return null
}
