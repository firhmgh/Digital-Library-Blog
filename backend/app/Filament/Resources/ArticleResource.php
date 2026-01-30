<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ArticleResource\Pages;
use App\Models\Article;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;

class ArticleResource extends Resource
{
    protected static ?string $model = Article::class;
    protected static ?string $navigationIcon = 'heroicon-o-document-text';
    protected static ?string $navigationGroup = 'Blog Management';

    public static function form(Form $form): Form
    {
        return $form->schema([
            Forms\Components\Section::make('Visual & Files')
                ->schema([
                    Forms\Components\FileUpload::make('banner')
                        ->image()->directory('article-banners')->columnSpan(1),
                    Forms\Components\FileUpload::make('image')
                        ->label('Thumbnail/Secondary Image')
                        ->image()->directory('article-images')->columnSpan(1),
                    Forms\Components\FileUpload::make('pdf_file')
                        ->acceptedFileTypes(['application/pdf'])->directory('article-pdfs'),
                    Forms\Components\TextInput::make('pdf_url')->url(),
                ])->columns(2),

            Forms\Components\Section::make('Content')
                ->schema([
                    Forms\Components\TextInput::make('title')
                        ->required()->live(onBlur: true)
                        ->afterStateUpdated(fn ($state, $set) => $set('slug', Str::slug($state))),
                    Forms\Components\TextInput::make('slug')->required()->unique(ignoreRecord: true),
                    Forms\Components\Select::make('category_id')
                        ->relationship('category', 'name')->required(),
                    Forms\Components\RichEditor::make('content')->required()->columnSpanFull(),
                ])->columns(2),

            Forms\Components\Section::make('Settings')
                ->schema([
                    Forms\Components\Select::make('status')
                        ->options(['draft' => 'Draft', 'published' => 'Published'])
                        ->default('draft')->required()->live(),
                    Forms\Components\DateTimePicker::make('published_at'),
                    Forms\Components\Select::make('user_id')
                        ->label('Author')
                        ->relationship('author', 'name')
                        ->default(Auth::id())
                        ->required(),
                ])->columns(3),
        ]);
    }

    public static function table(Table $table): Table
    {
        return $table->columns([
            Tables\Columns\ImageColumn::make('banner'),
            Tables\Columns\TextColumn::make('title')->searchable()->sortable(),
            Tables\Columns\TextColumn::make('category.name'),
            Tables\Columns\TextColumn::make('author.name')->label('Author'),
            Tables\Columns\TextColumn::make('status')->badge()
                ->color(fn (string $state): string => match ($state) {
                    'published' => 'success',
                    'draft' => 'gray',
                }),
            Tables\Columns\TextColumn::make('views')->numeric()->sortable(),
        ])->actions([Tables\Actions\EditAction::make(), Tables\Actions\DeleteAction::make()]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListArticles::route('/'),
            'create' => Pages\CreateArticle::route('/create'),
            'edit' => Pages\EditArticle::route('/{record}/edit'),
        ];
    }
}