# Todo List

Projet d'initiation à la réalisation d'une architecture micro-services avec Docker et Node.js

## Construction des containers et démarrage des services Docker

```
docker-compose up
```

Pour reprendre la main dans le terminal

```
docker-compose up -d
```

## Démarrage des services Docker

```
docker-compose up -d
```

## Extinction des containers Docker

```
docker-compose stop
```

## Extinction et suppression des containers Docker

```
docker-compose down
```

### + suppression des données dans les volumes

```
docker-compose down --volumes
```

## Autres commandes Docker

https://docs.docker.com/compose/reference/

## Consultation de l'API Rest

```
http://localhost:3333
```

## Installation des dépendances du service tdl_api

```
docker-compose run tdl_api npm ci
```

ou

```
docker-compose run tdl_api npm install
```

## Connaître les variables d'environnement utilisées par un container

```
docker-compose run tdl_api env
```

---

**Alexandre Leroux**

- _Mail_ : alex@sherpa.one
- _Github_ : sherpa1
- _Twitter_ : @_sherpa_
- _Discord_ : sherpa#3890

_Enseignant vacataire à l'Université de Lorraine_

- IUT Nancy-Charlemagne (LP Ciasie)

- Institut des Sciences du Digital, Management & Cognition (Masters Sciences Cognitives)
