/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTableIfNotExists('forms', function (table) {
        table.increments('id');
        table.string('nama_form').notNullable();
        table.string('kode_form').notNullable();
        table.longtext('deskripsi').notNullable();
        table.date('masa_berlaku').notNullable();
        table.string('pembuat_form').notNullable();
        table.boolean('status');
        table.longtext('form_json').notNullable();
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('forms');
};
