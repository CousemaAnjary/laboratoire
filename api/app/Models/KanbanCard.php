<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KanbanCard extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'due_date',
        'position',
        'list_id',
    ];

    public function kanbanList()
    {
        return $this->belongsTo(KanbanList::class);
    }
}