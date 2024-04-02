import React from 'react'

export const TitleSection = ({title, subtitle}) => {
  return (
    <div className="titlesSection">
        <h1 className="titleAdote">{title}</h1>
        <p className="subtitleAdote">
            {subtitle}
        </p>
      </div>
  )
}
