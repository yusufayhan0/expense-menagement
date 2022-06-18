### -- Redux was used as state management in the project, but it was not used because it is a basic application, its infrastructure is ready
<br>

### -- 3 different charts were used in the project, since the data does not come from the backend, it is not fully suitable for the charts.
<br>

### -- Since commitlint is used, it can be committed in 4 different ways.
### `[build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test]`

<br>


## Available Scripts

to load the necessary files in the project: 

### `npm install && yarn install`

After the installation is finished, use the following command to run the project
### `npm start && yarn start`

json-server is used in the project. Before doing get post, open cmd in the data folder in the project directory and run the following command

### open cmd in directory
/data/

### `json-server --watch db.json --port 3004`

It will work with port 3004. If you are going to use another port, do not forget to change it from the .env file.

