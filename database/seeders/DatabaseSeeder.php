<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Rencana;
use App\Models\Ruangan;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        User::create([
            'name' => 'afrial',
            'nis' => '544201199',
            'password' => bcrypt('111'),
            'role' => 'siswa'
        ]);
        User::create([
            'name' => 'guru',
            'nis' => 'guru',
            'password' => bcrypt('111'),
            'role' => 'guru'
        ]);
        User::create([
            'name' => 'admin',
            'nis' => 'admin',
            'password' => bcrypt('111'),
            'role' => 'admin'
        ]);

        Rencana::create([
            'id_user' => 1,
            'judul' => 'Buka Puasa Bersama',
            'id_ruangan' => 1,
            'mulai' => '2023-03-31T10:00',
            'selesai' => '2023-03-31T13:00',
            'status_rencana' => 'proses',
            'penanggung_jawab' => 'Afrial Ivan Pratama',
            'deskripsi' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt veritatis molestiae aliquam maiores repellendus. Illum ea quas porro, tempora soluta qui quidem, eos excepturi dolorum maiores doloremque rem ipsam, temporibus nisi? Explicabo illum dignissimos facere error excepturi sunt aliquid consectetur amet est incidunt. Impedit accusantium delectus possimus voluptates nesciunt dignissimos architecto magnam eum nobis vel, fuga dolorum nisi repellat quidem iusto perferendis quod. Rerum quasi laudantium quidem aliquam sapiente? Blanditiis praesentium aut, alias tenetur harum nemo perspiciatis voluptatem hic ullam debitis soluta nostrum explicabo inventore, reprehenderit consequuntur necessitatibus in quasi animi voluptate ad reiciendis similique itaque voluptatibus. Enim, incidunt. Laboriosam, temporibus. Perspiciatis pariatur in eaque nostrum earum, soluta vel accusamus tenetur voluptatibus corrupti eveniet aspernatur dolore? Omnis magni deleniti, est eligendi dolorem dolores necessitatibus mollitia provident voluptate nemo impedit, adipisci molestias ullam voluptatibus eos nostrum. Deleniti atque unde maxime quo non? Voluptatem ad quo culpa nobis natus dolore amet corporis aspernatur, exercitationem aliquam odio excepturi architecto nisi facilis? Reiciendis quibusdam assumenda eius quos veritatis quis nulla molestiae doloribus voluptate, nobis, rerum dolores alias ratione aliquam impedit voluptatibus corporis officia modi ad veniam hic eos dignissimos quidem totam. Nostrum sapiente excepturi nesciunt, in aliquid quae dicta molestiae maxime molestias. Corrupti, cum!'
        ]);
        Rencana::create([
            'id_user' => 1,
            'judul' => 'Penamatan',
            'id_ruangan' => 5,
            'mulai' => '2023-04-01T10:00',
            'selesai' => '2023-04-01T13:00',
            'status_rencana' => 'selesai',
            'penanggung_jawab' => 'Afrial Ivan Pratama',
            'deskripsi' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt veritatis molestiae aliquam maiores repellendus. Illum ea quas porro, tempora soluta qui quidem, eos excepturi dolorum maiores doloremque rem ipsam, temporibus nisi? Explicabo illum dignissimos facere error excepturi sunt aliquid consectetur amet est incidunt. Impedit accusantium delectus possimus voluptates nesciunt dignissimos architecto magnam eum nobis vel, fuga dolorum nisi repellat quidem iusto perferendis quod. Rerum quasi laudantium quidem aliquam sapiente? Blanditiis praesentium aut, alias tenetur harum nemo perspiciatis voluptatem hic ullam debitis soluta nostrum explicabo inventore, reprehenderit consequuntur necessitatibus in quasi animi voluptate ad reiciendis similique itaque voluptatibus. Enim, incidunt. Laboriosam, temporibus. Perspiciatis pariatur in eaque nostrum earum, soluta vel accusamus tenetur voluptatibus corrupti eveniet aspernatur dolore? Omnis magni deleniti, est eligendi dolorem dolores necessitatibus mollitia provident voluptate nemo impedit, adipisci molestias ullam voluptatibus eos nostrum. Deleniti atque unde maxime quo non? Voluptatem ad quo culpa nobis natus dolore amet corporis aspernatur, exercitationem aliquam odio excepturi architecto nisi facilis? Reiciendis quibusdam assumenda eius quos veritatis quis nulla molestiae doloribus voluptate, nobis, rerum dolores alias ratione aliquam impedit voluptatibus corporis officia modi ad veniam hic eos dignissimos quidem totam. Nostrum sapiente excepturi nesciunt, in aliquid quae dicta molestiae maxime molestias. Corrupti, cum!'
        ]);
        Rencana::create([
            'id_user' => 1,
            'judul' => 'Ukk RPL',
            'id_ruangan' => 2,
            'mulai' => '2023-04-01T10:00',
            'selesai' => '2023-04-01T13:00',
            'status_rencana' => 'belum',
            'penanggung_jawab' => 'Afrial Ivan Pratama',
            'deskripsi' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt veritatis molestiae aliquam maiores repellendus. Illum ea quas porro, tempora soluta qui quidem, eos excepturi dolorum maiores doloremque rem ipsam, temporibus nisi? Explicabo illum dignissimos facere error excepturi sunt aliquid consectetur amet est incidunt. Impedit accusantium delectus possimus voluptates nesciunt dignissimos architecto magnam eum nobis vel, fuga dolorum nisi repellat quidem iusto perferendis quod. Rerum quasi laudantium quidem aliquam sapiente? Blanditiis praesentium aut, alias tenetur harum nemo perspiciatis voluptatem hic ullam debitis soluta nostrum explicabo inventore, reprehenderit consequuntur necessitatibus in quasi animi voluptate ad reiciendis similique itaque voluptatibus. Enim, incidunt. Laboriosam, temporibus. Perspiciatis pariatur in eaque nostrum earum, soluta vel accusamus tenetur voluptatibus corrupti eveniet aspernatur dolore? Omnis magni deleniti, est eligendi dolorem dolores necessitatibus mollitia provident voluptate nemo impedit, adipisci molestias ullam voluptatibus eos nostrum. Deleniti atque unde maxime quo non? Voluptatem ad quo culpa nobis natus dolore amet corporis aspernatur, exercitationem aliquam odio excepturi architecto nisi facilis? Reiciendis quibusdam assumenda eius quos veritatis quis nulla molestiae doloribus voluptate, nobis, rerum dolores alias ratione aliquam impedit voluptatibus corporis officia modi ad veniam hic eos dignissimos quidem totam. Nostrum sapiente excepturi nesciunt, in aliquid quae dicta molestiae maxime molestias. Corrupti, cum!'
        ]);
        Rencana::create([
            'id_user' => 1,
            'judul' => 'Rapat Osis',
            'id_ruangan' => 3,
            'mulai' => '2023-03-30T10:00',
            'selesai' => '2023-03-30T13:00',
            'status_rencana' => 'belum',
            'penanggung_jawab' => 'Afrial Ivan Pratama',
            'deskripsi' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt veritatis molestiae aliquam maiores repellendus. Illum ea quas porro, tempora soluta qui quidem, eos excepturi dolorum maiores doloremque rem ipsam, temporibus nisi? Explicabo illum dignissimos facere error excepturi sunt aliquid consectetur amet est incidunt. Impedit accusantium delectus possimus voluptates nesciunt dignissimos architecto magnam eum nobis vel, fuga dolorum nisi repellat quidem iusto perferendis quod. Rerum quasi laudantium quidem aliquam sapiente? Blanditiis praesentium aut, alias tenetur harum nemo perspiciatis voluptatem hic ullam debitis soluta nostrum explicabo inventore, reprehenderit consequuntur necessitatibus in quasi animi voluptate ad reiciendis similique itaque voluptatibus. Enim, incidunt. Laboriosam, temporibus. Perspiciatis pariatur in eaque nostrum earum, soluta vel accusamus tenetur voluptatibus corrupti eveniet aspernatur dolore? Omnis magni deleniti, est eligendi dolorem dolores necessitatibus mollitia provident voluptate nemo impedit, adipisci molestias ullam voluptatibus eos nostrum. Deleniti atque unde maxime quo non? Voluptatem ad quo culpa nobis natus dolore amet corporis aspernatur, exercitationem aliquam odio excepturi architecto nisi facilis? Reiciendis quibusdam assumenda eius quos veritatis quis nulla molestiae doloribus voluptate, nobis, rerum dolores alias ratione aliquam impedit voluptatibus corporis officia modi ad veniam hic eos dignissimos quidem totam. Nostrum sapiente excepturi nesciunt, in aliquid quae dicta molestiae maxime molestias. Corrupti, cum!'
        ]);
        Rencana::create([
            'id_user' => 1,
            'judul' => 'Sosialisasi',
            'id_ruangan' => 4,
            'mulai' => '2023-03-31T10:00',
            'selesai' => '2023-03-31T13:00',
            'status_rencana' => 'proses',
            'penanggung_jawab' => 'Afrial Ivan Pratama',
            'deskripsi' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt veritatis molestiae aliquam maiores repellendus. Illum ea quas porro, tempora soluta qui quidem, eos excepturi dolorum maiores doloremque rem ipsam, temporibus nisi? Explicabo illum dignissimos facere error excepturi sunt aliquid consectetur amet est incidunt. Impedit accusantium delectus possimus voluptates nesciunt dignissimos architecto magnam eum nobis vel, fuga dolorum nisi repellat quidem iusto perferendis quod. Rerum quasi laudantium quidem aliquam sapiente? Blanditiis praesentium aut, alias tenetur harum nemo perspiciatis voluptatem hic ullam debitis soluta nostrum explicabo inventore, reprehenderit consequuntur necessitatibus in quasi animi voluptate ad reiciendis similique itaque voluptatibus. Enim, incidunt. Laboriosam, temporibus. Perspiciatis pariatur in eaque nostrum earum, soluta vel accusamus tenetur voluptatibus corrupti eveniet aspernatur dolore? Omnis magni deleniti, est eligendi dolorem dolores necessitatibus mollitia provident voluptate nemo impedit, adipisci molestias ullam voluptatibus eos nostrum. Deleniti atque unde maxime quo non? Voluptatem ad quo culpa nobis natus dolore amet corporis aspernatur, exercitationem aliquam odio excepturi architecto nisi facilis? Reiciendis quibusdam assumenda eius quos veritatis quis nulla molestiae doloribus voluptate, nobis, rerum dolores alias ratione aliquam impedit voluptatibus corporis officia modi ad veniam hic eos dignissimos quidem totam. Nostrum sapiente excepturi nesciunt, in aliquid quae dicta molestiae maxime molestias. Corrupti, cum!'
        ]);
        Rencana::create([
            'id_user' => 1,
            'judul' => 'latihan ekskul',
            'id_ruangan' => 4,
            'mulai' => '2023-03-31T10:00',
            'selesai' => '2023-03-31T13:00',
            'status_rencana' => 'belum_konfirmasi',
            'penanggung_jawab' => 'Afrial Ivan Pratama',
            'deskripsi' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt veritatis molestiae aliquam maiores repellendus. Illum ea quas porro, tempora soluta qui quidem, eos excepturi dolorum maiores doloremque rem ipsam, temporibus nisi? Explicabo illum dignissimos facere error excepturi sunt aliquid consectetur amet est incidunt. Impedit accusantium delectus possimus voluptates nesciunt dignissimos architecto magnam eum nobis vel, fuga dolorum nisi repellat quidem iusto perferendis quod. Rerum quasi laudantium quidem aliquam sapiente? Blanditiis praesentium aut, alias tenetur harum nemo perspiciatis voluptatem hic ullam debitis soluta nostrum explicabo inventore, reprehenderit consequuntur necessitatibus in quasi animi voluptate ad reiciendis similique itaque voluptatibus. Enim, incidunt. Laboriosam, temporibus. Perspiciatis pariatur in eaque nostrum earum, soluta vel accusamus tenetur voluptatibus corrupti eveniet aspernatur dolore? Omnis magni deleniti, est eligendi dolorem dolores necessitatibus mollitia provident voluptate nemo impedit, adipisci molestias ullam voluptatibus eos nostrum. Deleniti atque unde maxime quo non? Voluptatem ad quo culpa nobis natus dolore amet corporis aspernatur, exercitationem aliquam odio excepturi architecto nisi facilis? Reiciendis quibusdam assumenda eius quos veritatis quis nulla molestiae doloribus voluptate, nobis, rerum dolores alias ratione aliquam impedit voluptatibus corporis officia modi ad veniam hic eos dignissimos quidem totam. Nostrum sapiente excepturi nesciunt, in aliquid quae dicta molestiae maxime molestias. Corrupti, cum!'
        ]);

        Ruangan::create([
            'nama_ruangan' => 'XII RPL',
            'status_ruangan' => 'kosong'
        ]);
        Ruangan::create([
            'nama_ruangan' => 'XII TKJ 1',
            'status_ruangan' => 'disable'
        ]);
        Ruangan::create([
            'nama_ruangan' => 'XII TKJ 2',
            'status_ruangan' => 'kosong'
        ]);
        Ruangan::create([
            'nama_ruangan' => 'XII TKJ 3',
            'status_ruangan' => 'kosong'
        ]);
        Ruangan::create([
            'nama_ruangan' => 'XII TKJ 4',
            'status_ruangan' => 'terisi'
        ]);
        Ruangan::create([
            'nama_ruangan' => 'XII TKJ 5',
            'status_ruangan' => 'kosong'
        ]);
    }
}
