<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet">

    <!-- Scripts -->
    @viteReactRefresh
    @php
        $component = $page['component'];
        $path = "resources/js/Pages/{$component}.tsx";
        if (str_contains($component, '::')) {
            [$module, $name] = explode('::', $component);
            $path = "resources/js/Modules/{$module}/Pages/{$name}.tsx";
        }
    @endphp
    @vite(['resources/js/app.tsx', $path])
    @inertiaHead
</head>
<body class="font-sans antialiased text-slate-900 bg-slate-50">
    
    @inertia
</body>
</html>
