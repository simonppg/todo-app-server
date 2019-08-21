install sequlize:
npm i sequelize
npm i sequelize-cli

never install sequelize globaly, migrations fail, run in this way:
node_modules/.bin/sequelize model:create --name User --attributes name:string,surname:string,email:string,password:string