export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '61c21d1f7b153d4837cb966b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-e1oxgk91',
                  apiId: '04472e39-2588-41e6-a6e3-7cfcc3b0986f'
                },
                {
                  buildHookId: '61c21d1f86213944ea886a42',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-prwxzn4p',
                  apiId: 'b94c2286-432a-4804-a0cc-93f38cebda86'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/veryspry/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-prwxzn4p.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
