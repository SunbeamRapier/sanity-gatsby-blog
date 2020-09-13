export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f5eb046a9ea4d9165e4732c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-269k5mgh',
                  apiId: 'ee21c150-4570-4f45-a651-3acf0bccd3d1'
                },
                {
                  buildHookId: '5f5eb046c3e9a6796b667b70',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-97h2v4n7',
                  apiId: '820d26b3-2562-4a80-b745-85dd88a89aae'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/SunbeamRapier/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-97h2v4n7.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
