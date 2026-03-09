<?php

namespace App\Modules\Properties\Presentation\Notifications;

use App\Modules\Properties\Domain\Models\PropertyInquiry;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class PropertyInquiryNotification extends Notification
{
    use Queueable;

    public function __construct(protected PropertyInquiry $inquiry) {}

    public function via($notifiable): array
    {
        return ['mail', 'database'];
    }

    public function toMail($notifiable): MailMessage
    {
        return (new MailMessage)
            ->subject('New Inquiry: ' . $this->inquiry->property->title)
            ->greeting('Hello ' . $notifiable->name . '!')
            ->line('You have received a new inquiry for one of your listed properties.')
            ->line('**Guest Details:**')
            ->line('Name: ' . $this->inquiry->name)
            ->line('Email: ' . $this->inquiry->email)
            ->line('**Message:**')
            ->line($this->inquiry->message)
            ->action('View Inquiry in Dashboard', url('/dashboard'))
            ->line('Thank you for using EstateManager!');
    }

    public function toArray($notifiable): array
    {
        return [
            'inquiry_id' => $this->inquiry->id,
            'property_id' => $this->inquiry->property_id,
            'client_name' => $this->inquiry->name,
            'message' => 'New inquiry for ' . $this->inquiry->property->title,
        ];
    }
}
