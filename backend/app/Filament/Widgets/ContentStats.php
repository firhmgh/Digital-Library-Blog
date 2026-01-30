<?php

namespace App\Filament\Widgets;

use App\Models\Article;
use App\Models\News;
use App\Models\Event;
use App\Models\LibraryInformation;
use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;
use Illuminate\Support\Facades\Auth;

class ContentStats extends StatsOverviewWidget
{
    protected function getStats(): array
    {
        $user = Auth::user();

        $articleQuery = Article::query();
        $newsQuery = News::query();
        $eventQuery = Event::query();
        $libraryInfoQuery = LibraryInformation::query();

        // Jika login sebagai editor, hanya hitung data milik sendiri
        if ($user->role === 'editor') {
            $articleQuery->where('user_id', $user->id);
            $newsQuery->where('user_id', $user->id);
            $eventQuery->where('user_id', $user->id);
            $libraryInfoQuery->where('user_id', $user->id);
        }

        return [
            Stat::make('Total Artikel', $articleQuery->count())
                ->description('Artikel Literasi')
                ->descriptionIcon('heroicon-m-document-text')
                ->color('primary'),

            Stat::make('Total Berita', $newsQuery->count())
                ->description('Berita Terbaru')
                ->descriptionIcon('heroicon-m-newspaper')
                ->color('success'),

            Stat::make('Total Event', $eventQuery->count())
                ->description('Acara Perpustakaan')
                ->descriptionIcon('heroicon-m-calendar-days')
                ->color('warning'),

            Stat::make('Info Perpustakaan', $libraryInfoQuery->count())
                ->description('Informasi Publik')
                ->descriptionIcon('heroicon-m-building-library')
                ->color('info'),
        ];
    }
}
