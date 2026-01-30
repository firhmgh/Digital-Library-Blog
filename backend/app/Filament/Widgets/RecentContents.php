<?php

namespace App\Filament\Widgets;

use App\Models\Article;
use Filament\Tables;
use Filament\Widgets\TableWidget as BaseWidget;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth; // Tambahkan import ini

class RecentContents extends BaseWidget
{
    protected static ?string $heading = 'Artikel Terakhir Diperbarui';
    protected static ?int $sort = 2;
    protected int | string | array $columnSpan = 'full';

    protected function getTableQuery(): Builder
    {
        $query = Article::query();

        /** @var \App\Models\User $user */
        $user = Auth::user(); // Gunakan Facade Auth agar terdeteksi Intelephense

        // Periksa apakah user ada dan memiliki role editor
        if ($user && $user->role === 'editor') {
            $query->where('user_id', $user->id);
        }

        return $query->latest('updated_at')->limit(5);
    }

    protected function getTableColumns(): array
    {
        return [
            Tables\Columns\TextColumn::make('title')
                ->label('Judul Artikel')
                ->limit(50),

            Tables\Columns\TextColumn::make('status')
                ->badge()
                ->color(fn(string $state): string => match ($state) {
                    'published' => 'success',
                    'draft' => 'gray',
                    default => 'gray',
                }),

            Tables\Columns\TextColumn::make('updated_at')
                ->label('Waktu Perubahan')
                ->dateTime('d M Y H:i')
                ->description(fn(Article $record): string => $record->updated_at->diffForHumans()),
        ];
    }
}
