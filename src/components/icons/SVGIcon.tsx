import React, { DetailedHTMLProps, HTMLAttributes } from 'react'

interface IIconProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  size?: number
  color?: string
  pathClassName?: string
  icon: React.ElementType
}

const SVGIcon: React.FC<IIconProps> = (props) => {
  const { size, color, icon, style: styleArg, ...svgProps } = props
  const svgExtraProps: any = {}
  svgExtraProps['data-icon'] = 'svg'

  if (size !== undefined) {
    svgExtraProps.width = size
    svgExtraProps.height = size
  } else {
    // default
    svgExtraProps.width = '24'
    svgExtraProps.height = '24'
  }

  if (color !== undefined) {
    svgExtraProps.style = { color, ...styleArg }
  }
  const IconComp: React.ElementType = icon
  return <IconComp {...svgProps} {...svgExtraProps} />
}

export default SVGIcon
