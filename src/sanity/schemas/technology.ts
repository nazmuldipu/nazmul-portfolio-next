import {TechnologyPreview} from './preview/TechnologyPreview'

export const technology = {
  name: 'technology',
  title: 'Technology',
  type: 'array',
  of: [
    {
      type: 'object',
      fields: [
        {
          title: 'Name',
          name: 'name',
          type: 'string',
        },
        {
          title: 'Logo',
          name: 'logo',
          type: 'inlineSvg',
        },
      ],
      components: {preview: TechnologyPreview},
      preview: {
        select: {
          icon: 'logo',
          title: 'name',
        },
      },
    },
  ],
}
