export const skills = {
  name: 'skills',
  title: 'Skills',
  type: 'array',
  of: [
    {
      type: 'object',
      fields: [
        {
          title: 'Level',
          name: 'level',
          type: 'string',
        },
        {
          title: 'Technologies',
          name: 'technologies',
          type: 'technology',
        },
      ],
    },
  ],
}
