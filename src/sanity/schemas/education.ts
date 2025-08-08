export const education = {
  name: 'education',
  title: 'Education',
  type: 'array',
  of: [
    {
      type: 'object',
      fields: [
        {
          title: 'Academy Logo',
          name: 'academyLogo',
          type: 'image',
        },
        {
          title: 'Degree',
          name: 'degree',
          type: 'string',
        },
        {
          title: 'Academy',
          name: 'academy',
          type: 'string',
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
          title: 'Major',
          name: 'major',
          type: 'array',
          of: [{type: 'block'}],
        },
      ],
      preview: {
        select: {
          media: 'academyLogo',
          title: 'degree',
          subtitle: 'academy',
        },
      },
    },
  ],
}
