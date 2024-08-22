<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ListSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('kanban_lists')->insert([
            ['name' => 'À faire', 'position' => 1, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'En cours', 'position' => 2, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Terminé', 'position' => 3, 'created_at' => now(), 'updated_at' => now()],
        ]);
    }
}