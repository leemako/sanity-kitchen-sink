export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61819bf819170b32dab9fd71',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-jeq9z9ia',
                  apiId: '6b383843-78dd-446f-8b07-dac7cd60a21f'
                },
                {
                  buildHookId: '61819bf886845732bb4ad5f6',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-an4wtnr7',
                  apiId: '3f371ee4-d9f2-4a7c-bcdf-8cac44b9a42d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/leemako/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-an4wtnr7.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
