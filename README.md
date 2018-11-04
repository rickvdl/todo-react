# Todo React app

## Running the app

A live version can be found at https://todo.testservers.nl

### Using Docker images from DockerHub

- Make sure Docker is installed and running
- Make sure `docker-compose` is installed

At the root of the project directory, execute the following command.
```bash
docker-compose up
```

Add `-d` to run the app in the background.

### Using the local Dockerfile's and project files

This will only work if all the dependencies are installed, like `yarn`, `node` etc.

At the root of the project directory, execute the following command.
```bash
docker-compose -f docker-compose-local.yml up
```

### Run the API and or app in dev mode

Go the the directory of the `app/` or `api/`

Run
```bash
yarn dev
```

## Viewing the app

Regardless of the method used to run the app it will now be available on `localhost:3000` and the api will run on `localhost:3001`.