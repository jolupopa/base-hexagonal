<?php

namespace App\Modules\Admin\Presentation\Controllers\Users;

use App\Modules\Auth\Domain\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class UpdateUserController
{
    public function __invoke(Request $request, User $user)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', Rule::unique('users')->ignore($user->id)],
        ]);

        $user->update($validated);

        return redirect()->route('admin.users.index')
            ->with('message', 'User updated successfully');
    }
}
