// Update with your config settings.

const { knexSnakeCaseMappers } = require("objection");

module.exports = {
	development: {
		client: "postgresql",
		connection: {
			database: "objectiondb",
			user: "node_user",
			password: "node_password",
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: "knex_migrations",
		},

		seeds: {
			directory: "./seeds",
		},

		...knexSnakeCaseMappers,
	},
};
