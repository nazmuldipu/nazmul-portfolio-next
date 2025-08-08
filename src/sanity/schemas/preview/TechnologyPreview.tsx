import {PreviewProps} from 'sanity'
import {InlineSvgPreviewItem} from '@focus-reactive/sanity-plugin-inline-svg-input'

export function TechnologyPreview(props: PreviewProps) {
  return (
    <div>
      <InlineSvgPreviewItem icon={props.icon} title={props.title} />
    </div>
  )
}
