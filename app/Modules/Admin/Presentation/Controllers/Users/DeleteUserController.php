<?php

namespace App\Modules\Admin\Presentation\Controllers\Users;

use App\Modules\Auth\Domain\Models\User;
use Illuminate\Http\Request;

class DeleteUserController
{
    public function __invoke(Request $request, User $user)
    {
        if ($user->id === $request->user()->id) {
            return back()->with('error', 'You cannot delete yourself.');
        }

        $user->delete();

        return redirect()->route('admin.users.index')
            ->with('message', 'User deleted successfully');
    }
}
