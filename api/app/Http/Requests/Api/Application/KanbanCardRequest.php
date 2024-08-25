<?php

namespace App\Http\Requests\Api\Application;

use Illuminate\Foundation\Http\FormRequest;

class KanbanCardRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string'],
            'description' => ['nullable', 'string'],
            'due_date' => ['nullable', 'date'],
            'position' => ['required', 'integer'],
            'list_id' => ['required', 'integer']
        ];
    }
}