# Spinner

## Setup

### Environment Variables

| Name        | Default             | Description                  |
| ----        | -------             | -----------                  |
| PORT        | 9000                | Port server should listen on |
| MONGODB_URI | mongodb://localhost | Mongo connection info        |

## Heroku Deploy

```sh
heroku apps:create spinner
heroku addons:create mongolab
git push heroku master
```
