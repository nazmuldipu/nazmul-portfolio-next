import {SlugSourceFn} from 'sanity'

const getAboutSlugSource: SlugSourceFn = (doc, context): string => {
  const {title} = context.parent
  return String(title.replace(/[,() ]+/g, ' ').trim())
}

export const about = {
  name: 'about',
  type: 'document',
  title: 'About',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
    },
    {
      title: 'Details',
      name: 'details',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              title: 'Title',
              name: 'title',
              type: 'string',
            },
            {
              title: 'Slug',
              name: 'slug',
              type: 'slug',
              options: {
                source: getAboutSlugSource,
                slugify: (input: string) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
              },
            },
            {
              title: 'Value',
              name: 'value',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
}
