

exports.up = function(knex, Promise) {
    return knex.schema.createTable('game', (table) => {
        table.increments()
        table.text('name')
        table.text('developer')
        table.float('rating')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('game')
};

