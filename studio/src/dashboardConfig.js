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
                  buildHookId: '5fedbc7faf2ae35ee9ac0869',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-vpdzv4ks',
                  apiId: '80374319-3fdd-4a27-9c4e-3fa2ccecb921'
                },
                {
                  buildHookId: '5fedbc7f6610cc7c5c55cdd8',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ws18voqd',
                  apiId: 'dc996be9-b354-4684-98ec-70ceda7e6581'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/owaaquino/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ws18voqd.netlify.app', category: 'apps' }
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
