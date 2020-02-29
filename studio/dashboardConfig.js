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
                  buildHookId: '5e5ae4556d2badc30ceb14d9',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-stb32i7y',
                  apiId: '16d7e630-9ffd-4c47-acb4-fe27907aeb8c'
                },
                {
                  buildHookId: '5e5ae45547370f2a6db048f7',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-buhvs4ov',
                  apiId: '2361a92b-5d03-4765-8cb8-fdf729213b6a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/florioMICHAEL/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-buhvs4ov.netlify.com',
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
