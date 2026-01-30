<?php

namespace App\Filament\Resources;

use App\Filament\Resources\EventResource\Pages;
use App\Models\Event;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;

class EventResource extends Resource
{
    protected static ?string $model = Event::class;
    protected static ?string $navigationIcon = 'heroicon-o-calendar-days';
    protected static ?string $navigationGroup = 'Content Management';

    public static function form(Form $form): Form
    {
        return $form->schema([
            Forms\Components\Section::make('Event Detail')
                ->schema([
                    Forms\Components\FileUpload::make('banner')->image()->directory('event-banners')->columnSpanFull(),
                    Forms\Components\TextInput::make('title')
                        ->required()->live(onBlur: true)
                        ->afterStateUpdated(fn($state, $set) => $set('slug', Str::slug($state))),
                    Forms\Components\TextInput::make('slug')->required()->unique(ignoreRecord: true),
                    Forms\Components\Select::make('category')
                        ->options(['workshop' => 'Workshop', 'discussion' => 'Discussion', 'exhibition' => 'Exhibition', 'webinar' => 'Webinar']),
                    Forms\Components\RichEditor::make('description')->required()->columnSpanFull(),
                ])->columns(2),

            Forms\Components\Section::make('Time & Location')
                ->schema([
                    Forms\Components\DatePicker::make('event_date')->required(),
                    Forms\Components\TextInput::make('event_time')->placeholder('e.g. 10:00 - 12:00'),
                    Forms\Components\TextInput::make('location'),
                    Forms\Components\Select::make('location_type')
                        ->options(['physical' => 'Physical', 'online' => 'Online', 'hybrid' => 'Hybrid'])->required(),
                    Forms\Components\TextInput::make('spots_left')->numeric(),
                    Forms\Components\TextInput::make('registration_link')->url(),
                ])->columns(2),

            Forms\Components\Section::make('Status')
                ->schema([
                    Forms\Components\Select::make('status')
                        ->options(['draft' => 'Draft', 'published' => 'Published'])->required(),
                    Forms\Components\Select::make('status_event')
                        ->options(['upcoming' => 'Upcoming', 'ongoing' => 'Ongoing', 'full' => 'Full'])->required(),
                    Forms\Components\Select::make('user_id')
                        ->relationship('author', 'name')->default(Auth::id())->required(),
                ])->columns(3),
        ]);
    }

    public static function table(Table $table): Table
    {
        return $table->columns([
            Tables\Columns\TextColumn::make('title')->searchable(),
            Tables\Columns\TextColumn::make('event_date')->date(),
            Tables\Columns\TextColumn::make('status_event')->badge(),
            Tables\Columns\TextColumn::make('status')->badge(),
        ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListEvents::route('/'),
            'create' => Pages\CreateEvent::route('/create'),
            'edit' => Pages\EditEvent::route('/{record}/edit'),
        ];
    }
}
