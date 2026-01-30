<?php

namespace App\Filament\Resources;

use App\Filament\Resources\NewsResource\Pages;
use App\Models\News;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;

class NewsResource extends Resource
{
    protected static ?string $model = News::class;
    protected static ?string $navigationIcon = 'heroicon-o-newspaper';
    protected static ?string $navigationGroup = 'Blog Management';

    public static function form(Form $form): Form
    {
        return $form->schema([
            Forms\Components\Section::make('News Content')
                ->schema([
                    Forms\Components\FileUpload::make('banner')->image()->directory('news-banners')->columnSpanFull(),
                    Forms\Components\TextInput::make('title')
                        ->required()->live(onBlur: true)
                        ->afterStateUpdated(fn($state, $set) => $set('slug', Str::slug($state))),
                    Forms\Components\TextInput::make('slug')->required()->unique(ignoreRecord: true),
                    Forms\Components\RichEditor::make('content')->required()->columnSpanFull(),
                ])->columns(2),

            Forms\Components\Section::make('Status')
                ->schema([
                    Forms\Components\Select::make('status')
                        ->options(['draft' => 'Draft', 'published' => 'Published'])->required(),
                    Forms\Components\DateTimePicker::make('published_at'),
                    Forms\Components\Select::make('user_id')
                        ->label('Author')
                        ->relationship('author', 'name')
                        ->default(Auth::id())->required(),
                ])->columns(3),
        ]);
    }

    public static function table(Table $table): Table
    {
        return $table->columns([
            Tables\Columns\ImageColumn::make('banner'),
            Tables\Columns\TextColumn::make('title')->searchable(),
            Tables\Columns\TextColumn::make('status')->badge(),
            Tables\Columns\TextColumn::make('published_at')->dateTime(),
        ])->actions([Tables\Actions\EditAction::make(), Tables\Actions\DeleteAction::make()]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListNews::route('/'),
            'create' => Pages\CreateNews::route('/create'),
            'edit' => Pages\EditNews::route('/{record}/edit'),
        ];
    }
}
