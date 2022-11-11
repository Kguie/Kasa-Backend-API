# Kasa-Backend

Ce repo contient le code de l'API pour l'application web Kasa
Il va de paire avec [le repository de la partie frontend](https://github.com/Kguie/OC-projet7.git).


## Lancer l'API en local

Pour suivre le cours, vous aurez besoin d'installer l'API en local sur votre machine. Pour cela :
1. Faites un `git clone https://github.com/Kguie/OC-projet7.git`
2. Installez les `node_modules` avec `yarn`
3. Faites tourner l'API avec `yarn start`


## Consommer l 'API
L'API Kasa est une API REST. 
Une fois lancée, cette API met plusieurs routes à votre disposition :

- La route pour récupérer les données de tous les logements :
`GET /lodgings`

- La route pour avoir le détail d'un logement :
`GET /lodgings/:id`


## Express Generator
Cette base de code a été initialisée avec [Express Generator](https://expressjs.com/fr/starter/generator.html).

### L'API est déployé sur vercel à l'adresse https://vercel-api-kguie.vercel.app