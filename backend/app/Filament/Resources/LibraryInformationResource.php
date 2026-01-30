<?php

namespace App\Filament\Resources;

use App\Filament\Resources\LibraryInformationResource\Pages;
use App\Models\LibraryInformation;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;

class LibraryInformationResource extends Resource
{
    protected static ?string $model = LibraryInformation::class;
    protected static ?string $navigationIcon = 'heroicon-o-building-library';
    protected static ?string $navigationGroup = 'Library Management';

    public static function form(Form $form): Form
    {
        return $form->schema([
            Forms\Components\TextInput::make('title')
                ->required()->live(onBlur: true)
                ->afterStateUpdated(fn ($state, $set) => $set('slug', Str::slug($state))),
            Forms\Components\TextInput::make('slug')->required()->unique(ignoreRecord: true),
            Forms\Components\FileUpload::make('banner')->image()->directory('lib-info-banners'),
            Forms\Components\Select::make('type')
                ->options(['profile'=>'Profile','service'=>'Services','rule'=>'Rules','facility'=>'Facilities','contact'=>'Contact','other'=>'Other'])
                ->required(),
            Forms\Components\RichEditor::make('content')->required()->columnSpanFull(),
            Forms\Components\Select::make('status')
                ->options(['draft'=>'Draft','published'=>'Published'])->required(),
            Forms\Components\Select::make('user_id')
                ->relationship('user', 'name')->default(Auth::id())->required(),
        ]);
    }

    public static function table(Table $table): Table
    {
        return $table->columns([
            Tables\Columns\TextColumn::make('title')->searchable(),
            Tables\Columns\TextColumn::make('type')->badge(),
            Tables\Columns\TextColumn::make('status')->badge(),
        ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListLibraryInformations::route('/'),
            'create' => Pages\CreateLibraryInformation::route('/create'),
            'edit' => Pages\EditLibraryInformation::route('/{record}/edit'),
        ];
    }
}