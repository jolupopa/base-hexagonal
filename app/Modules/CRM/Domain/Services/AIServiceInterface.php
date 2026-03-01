<?php

namespace App\Modules\CRM\Domain\Services;

use App\Modules\CRM\Domain\Models\Lead;

interface AIServiceInterface
{
    /**
     * Scores a lead based on its metadata and interactions.
     * Returns a score from 0 to 100.
     */
    public function scoreLead(Lead $lead): int;

    /**
     * Estimates the market value of a property.
     */
    public function estimatePropertyValuation(array $propertyData): array;
}
