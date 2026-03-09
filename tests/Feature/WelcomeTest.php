<?php

namespace Tests\Feature;

use Tests\TestCase;
use Inertia\Testing\AssertableInertia as Assert;
use Illuminate\Foundation\Testing\RefreshDatabase;

class WelcomeTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test that the welcome page is rendered via Inertia.
     */
    public function test_welcome_page_is_rendered(): void
    {
        config(['inertia.testing.ensure_pages_exist' => false]);
        $this->withoutExceptionHandling();
        $response = $this->get('/');

        if ($response->status() !== 200) {
            dump($response->getContent());
        }

        $response->assertStatus(200);
        
        $response->assertInertia(fn (Assert $page) => $page
            ->component('Public::Welcome')
        );
    }
}
