import {SlugSourceFn, SlugifierFn} from 'sanity'

const slugify = (source: string) => source.toLowerCase().replace(/\s+/g, `-`)

const handleSlugify: SlugifierFn = (source: string, schemaType: any, context: any) => {
  return `/` + source.trim().split(`/`).map(slugify).join(`/`)
}

const getExperienceSlugSource: SlugSourceFn = (doc, context): string => {
  const {company, designation} = context.parent

  return String(
    company.replace(/[,() ]+/g, ' ').trim() + `/` + designation.replace(/[,() ]+/g, ' ').trim()
  )
}

export const experience = {
  name: 'experience',
  title: 'Experience',
  type: 'array',
  of: [
    {
      type: 'object',
      fields: [
        {
          title: 'Company Logo',
          name: 'companyLogo',
          type: 'image',
        },
        {
          title: 'Company',
          name: 'company',
          type: 'string',
        },
        {
          title: 'Designation',
          name: 'designation',
          type: 'string',
        },
        {
          title: 'Slug',
          name: 'slug',
          type: 'slug',
          options: {
            source: getExperienceSlugSource,
            slugify: handleSlugify,
          },
        },
        {
          title: 'Start',
          name: 'starts',
          type: 'string',
        },
        {
          title: 'End',
          name: 'ends',
          type: 'string',
        },
        {
          title: 'Technologies',
          name: 'technologies',
          type: 'technology',
        },
        {
          title: 'Roles',
          name: 'roles',
          type: 'array',
          of: [{type: 'block'}],
        },
      ],
      preview: {
        select: {
          media: 'companyLogo',
          title: 'company',
          subtitle: 'designation',
        },
      },
    },
  ],
}
