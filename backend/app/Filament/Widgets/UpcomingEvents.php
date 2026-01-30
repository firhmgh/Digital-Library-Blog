<?php

namespace App\Filament\Widgets;

use App\Models\Event;
use Filament\Tables;
use Filament\Widgets\TableWidget as BaseWidget;
use Illuminate\Database\Eloquent\Builder;

class UpcomingEvents extends BaseWidget
{
    protected static ?string $heading = 'Agenda Event Terdekat';
    protected static ?int $sort = 3;

    protected function getTableQuery(): Builder
    {
        return Event::query()
            ->whereDate('event_date', '>=', now()) // Hanya tanggal hari ini ke depan
            ->where('status', 'published')
            ->orderBy('event_date', 'asc')
            ->limit(5);
    }

    protected function getTableColumns(): array
    {
        return [
            Tables\Columns\TextColumn::make('title')
                ->label('Nama Event')
                ->weight('bold'),

            Tables\Columns\TextColumn::make('event_date')
                ->label('Tanggal Pelaksanaan')
                ->date('d M Y'),

            Tables\Columns\TextColumn::make('status_event')
                ->label('Status Kuota')
                ->badge()
                ->color(fn (string $state): string => match ($state) {
                    'upcoming' => 'info',
                    'ongoing' => 'success',
                    'full' => 'danger',
                    default => 'gray',
                }),

            Tables\Columns\TextColumn::make('location')
                ->label('Lokasi')
                ->icon('heroicon-m-map-pin'),
        ];
    }
}