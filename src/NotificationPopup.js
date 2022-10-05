import React, { useEffect } from 'react'

const config = {
  noticeable: {
    widget: 'Qglwge0Z4YAz4zMtIrjk',
  },
}

const NotificationPopup = () => {
  const handleFocus = (e) => {
    e.stopPropagation()
  }
  
  useEffect(() => {
    window.noticeable.render('widget', config.noticeable.widget, {
      selector: '#noticeable-widget',
    })
    return () => {
      window.noticeable.destroy('widget', config.noticeable.widget)
    }
  }, [])
  return <div onFocus={handleFocus} id="noticeable-widget"/>
}

export default NotificationPopup
