// seeds/01_forms.js

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('forms').del()
    .then(function () {
      // Inserts seed entries
      return knex('forms').insert([
        {
          nama_form: 'Nama Form 1',
          kode_form: 'Kode Form 1',
          deskripsi: 'Deskripsi Form 1',
          masa_berlaku: '2023-12-31', // Sesuaikan dengan format tanggal yang sesuai
          pembuat_form: 'Pembuat Form 1',
          status: true,
          form_json: '{"field1": "value1", "field2": "value2"}', // Sesuaikan dengan struktur JSON yang sesuai
        },
        {
          nama_form: 'Nama Form 2',
          kode_form: 'Kode Form 2',
          deskripsi: 'Deskripsi Form 2',
          masa_berlaku: '2023-12-31',
          pembuat_form: 'Pembuat Form 2',
          status: false,
          form_json: '{"field1": "value1", "field2": "value2"}',
        },
        {
          nama_form: 'Nama Form 3',
          kode_form: 'Kode Form 3',
          deskripsi: 'Deskripsi Form 3',
          masa_berlaku: '2023-12-31',
          pembuat_form: 'Pembuat Form 3',
          status: true,
          form_json: '{"field1": "value1", "field2": "value2"}',
        },
        {
          nama_form: 'Nama Form 4',
          kode_form: 'Kode Form 4',
          deskripsi: 'Deskripsi Form 4',
          masa_berlaku: '2023-12-31',
          pembuat_form: 'Pembuat Form 4',
          status: false,
          form_json: '{"field1": "value1", "field2": "value2"}',
        },
        {
          nama_form: 'Nama Form 5',
          kode_form: 'Kode Form 5',
          deskripsi: 'Deskripsi Form 5',
          masa_berlaku: '2023-12-31',
          pembuat_form: 'Pembuat Form 5',
          status: true,
          form_json: '{"field1": "value1", "field2": "value2"}',
        },
      ]);
    });
};
