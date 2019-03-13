const speciesSummary = {
  speciesSummary: [
    {
      kingdom: `animals`,
      cards: [
        {
          iconType: `species`,
          iconSrc: `homo sapiens`,
          description: {
            text: `Homo sapiens`,
            url: `http://localhost:8080/gxa/experiments?species=homo%20sapiens`
          },
          content: [
            {
              text: `10 experiments`
            },
            {
              text: `Baseline: 7`,
              url: `http://localhost:8080/gxa/experiments?species=homo%20sapiens&experimentType=baseline`
            },
            {
              text: `Differential: 3`,
              url: `http://localhost:8080/gxa/experiments?species=homo%20sapiens&experimentType=differential`
            }
          ]
        },
        {
          iconType: `species`,
          iconSrc: `mus musculus`,
          description: {
            text: `Mus musculus`,
            url: `http://localhost:8080/gxa/experiments?species=mus%20musculus`
          },
          content: [
            {
              text: `2 experiments`
            },
            {
              text: `Differential: 2`,
              url: `http://localhost:8080/gxa/experiments?species=mus%20musculus&experimentType=differential`
            }
          ]
        },
        {
          iconType: `species`,
          iconSrc: `schistosoma mansoni`,
          description: {
            text: `Schistosoma mansoni`,
            url: `http://localhost:8080/gxa/experiments?species=schistosoma%20mansoni`
          },
          content: [
            {
              text: `1 experiment`
            },
            {
              text: `Baseline: 1`,
              url: `http://localhost:8080/gxa/experiments?species=schistosoma%20mansoni&experimentType=baseline`
            }
          ]
        },
        {
          iconType: `species`,
          iconSrc: `drosophila melanogaster`,
          description: {
            text: `Drosophila melanogaster`,
            url: `http://localhost:8080/gxa/experiments?species=drosophila%20melanogaster`
          },
          content: [
            {
              text: `1 experiment`
            },
            {
              text: `Differential: 1`,
              url: `http://localhost:8080/gxa/experiments?species=drosophila%20melanogaster&experimentType=differential`
            }
          ]
        },
        {
          iconType: `species`,
          iconSrc: `anas platyrhynchos`,
          description: {
            text: `Anas platyrhynchos`,
            url: `http://localhost:8080/gxa/experiments?species=anas%20platyrhynchos`
          },
          content: [
            {
              text: `1 experiment`
            },
            {
              text: `Differential: 1`,
              url: `http://localhost:8080/gxa/experiments?species=anas%20platyrhynchos&experimentType=differential`
            }
          ]
        },
        {
          iconType: `species`,
          iconSrc: `caenorhabditis elegans`,
          description: {
            text: `Caenorhabditis elegans`,
            url: `http://localhost:8080/gxa/experiments?species=caenorhabditis%20elegans`
          },
          content: [
            {
              text: `1 experiment`
            },
            {
              text: `Differential: 1`,
              url: `http://localhost:8080/gxa/experiments?species=caenorhabditis%20elegans&experimentType=differential`
            }
          ]
        }
      ]
    },
    {
      kingdom: `plants`,
      cards: [
        {
          iconType: `species`,
          iconSrc: `oryza sativa`,
          description: {
            text: `Oryza sativa`,
            url: `http://localhost:8080/gxa/experiments?species=oryza%20sativa`
          },
          content: [
            {
              text: `3 experiments`
            },
            {
              text: `Differential: 3`,
              url: `http://localhost:8080/gxa/experiments?species=oryza%20sativa&experimentType=differential`
            }
          ]
        },
        {
          iconType: `species`,
          iconSrc: `zea mays`,
          description: {
            text: `Zea mays`,
            url: `http://localhost:8080/gxa/experiments?species=zea%20mays`
          },
          content: [
            {
              text: `2 experiments`
            },
            {
              text: `Differential: 2`,
              url: `http://localhost:8080/gxa/experiments?species=zea%20mays&experimentType=differential`
            }
          ]
        },
        {
          iconType: `species`,
          iconSrc: `brachypodium distachyon`,
          description: {
            text: `Brachypodium distachyon`,
            url: `http://localhost:8080/gxa/experiments?species=brachypodium%20distachyon`
          },
          content: [
            {
              text: `1 experiment`
            },
            {
              text: `Baseline: 1`,
              url: `http://localhost:8080/gxa/experiments?species=brachypodium%20distachyon&experimentType=baseline`
            }
          ]
        }
      ]
    },
    {
      kingdom: `fungi`,
      cards: [
        {
          iconType: `species`,
          iconSrc: `saccharomyces cerevisiae`,
          description: {
            text: `Saccharomyces cerevisiae`,
            url: `http://localhost:8080/gxa/experiments?species=saccharomyces%20cerevisiae`
          },
          content: [
            {
              text: `1 experiment`
            },
            {
              text: `Differential: 1`,
              url: `http://localhost:8080/gxa/experiments?species=saccharomyces%20cerevisiae&experimentType=differential`
            }
          ]
        }
      ]
    }
  ]
}

export { speciesSummary }
