@extends('layout', [
    'title' => 'Homepage'
])

@section('content')

    <h1>This is the homepage</h1>

    @if ($apps->count())

        {{-- this section is problematic --}}
        <ul>
            @foreach ($apps as $app)

                <li>
                    {{ $app->title }}
                    <br>
                    Category: {{ $app->category->name }}
                </li>

            @endforeach

        </ul>

    @endif

@endsection