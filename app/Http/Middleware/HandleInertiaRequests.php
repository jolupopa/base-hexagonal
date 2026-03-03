<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root view that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => [
                'user' => fn () => $request->user() ? [
                    'id'           => $request->user()->id,
                    'name'         => $request->user()->name,
                    'email'        => $request->user()->email,
                    'company_name' => $request->user()->company_name,
                    'avatar_url'   => $request->user()->avatar_url
                        ? '/storage/' . $request->user()->avatar_url
                        : null,
                    'initials'     => $request->user()->getInitials(),
                    'roles'        => $request->user()->roles->pluck('slug')->values()->all(),
                    'permissions'  => $request->user()->roles->flatMap->permissions->pluck('slug')
                        ->merge($request->user()->permissions->pluck('slug'))
                        ->unique()
                        ->values()
                        ->all(),
                ] : null,
            ],
            'flash' => [
                'message' => fn () => $request->session()->get('message'),
                'success' => fn () => $request->session()->get('success'),
                'error'   => fn () => $request->session()->get('error'),
            ],
        ];
    }
}
