export const projects = {
  name: 'projects',
  title: 'Projects',
  type: 'array',
  of: [
    {
      type: 'object',
      fields: [
        {
          title: 'Project name',
          name: 'projectName',
          type: 'string',
        },
        {
          title: 'Description',
          name: 'description',
          type: 'string',
        },
        {
          title: 'Skills',
          name: 'skills',
          type: 'string',
        },
        {
          title: 'Start',
          name: 'start',
          type: 'string',
        },
        {
          title: 'End',
          name: 'end',
          type: 'string',
        },
        {
          title: 'Link',
          name: 'link',
          type: 'string',
        },
        {
          title: 'Image',
          name: 'image',
          type: 'image',
        },
      ],
    },
  ],
}
