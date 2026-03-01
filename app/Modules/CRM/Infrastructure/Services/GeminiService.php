<?php

namespace App\Modules\CRM\Infrastructure\Services;

use App\Modules\CRM\Domain\Models\Lead;
use App\Modules\CRM\Domain\Services\AIServiceInterface;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class GeminiService implements AIServiceInterface
{
    public function __construct(
        protected string $apiKey
    ) {}

    public function scoreLead(Lead $lead): int
    {
        if (empty($this->apiKey)) {
            return 0;
        }

        try {
            $prompt = "Actúa como un experto en ventas inmobiliarias. Evalúa a este posible cliente (Lead) y califícalo del 0 al 100 según su potencial de cierre.\n\n" .
                "Datos del Lead:\n" .
                "- Nombre: {$lead->client_name}\n" .
                "- Email: {$lead->client_email}\n" .
                "- Teléfono: {$lead->client_phone}\n" .
                "- Notas: {$lead->notes}\n" .
                "- Metadatos: " . json_encode($lead->metadata) . "\n\n" .
                "Responde ÚNICAMENTE con el número de la calificación.";

            $response = Http::post("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={$this->apiKey}", [
                'contents' => [
                    ['parts' => [['text' => $prompt]]]
                ]
            ]);

            if ($response->successful()) {
                $text = $response->json('candidates.0.content.parts.0.text');
                return (int) trim($text);
            }
        } catch (\Exception $e) {
            Log::error("Gemini Error: " . $e->getMessage());
        }

        return 0;
    }

    public function estimatePropertyValuation(array $propertyData): array
    {
        if (empty($this->apiKey)) {
            return ['valuation' => 0, 'confidence' => 'low'];
        }

        try {
            $prompt = "Realiza una tasación inteligente (AVM) para la siguiente propiedad en Perú.\n\n" .
                "Datos:\n" . json_encode($propertyData) . "\n\n" .
                "Responde en formato JSON con las llaves 'valuation' (número) y 'explanation' (string breve).";

            $response = Http::post("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={$this->apiKey}", [
                'contents' => [
                    ['parts' => [['text' => $prompt]]]
                ],
                'generationConfig' => [
                    'response_mime_type' => 'application/json',
                ]
            ]);

            if ($response->successful()) {
                return $response->json('candidates.0.content.parts.0.text');
            }
        } catch (\Exception $e) {
            Log::error("Gemini Error: " . $e->getMessage());
        }

        return ['valuation' => 0, 'explanation' => 'Error in AI service'];
    }
}
