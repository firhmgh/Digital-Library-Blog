<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class LibraryInformation extends Model
{
    protected $table = 'library_informations';

    protected $fillable = ['title', 'slug', 'banner', 'content', 'type', 'status', 'user_id'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
