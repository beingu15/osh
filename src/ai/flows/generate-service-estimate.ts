'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating a service estimate based on a user's request.
 *
 * - generateServiceEstimate - A function that takes a user's request and returns an itemized statement of work with pricing.
 * - GenerateServiceEstimateInput - The input type for the generateServiceEstimate function.
 * - GenerateServiceEstimateOutput - The return type for the generateServiceEstimate function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateServiceEstimateInputSchema = z.object({
  requestDetails: z
    .string()
    .describe(
      'Detailed description of the makeup and/or costume design services requested.'
    ),
});
export type GenerateServiceEstimateInput = z.infer<
  typeof GenerateServiceEstimateInputSchema
>;

const GenerateServiceEstimateOutputSchema = z.object({
  statementOfWork: z.string().describe('Itemized statement of work with pricing.'),
});
export type GenerateServiceEstimateOutput = z.infer<
  typeof GenerateServiceEstimateOutputSchema
>;

export async function generateServiceEstimate(
  input: GenerateServiceEstimateInput
): Promise<GenerateServiceEstimateOutput> {
  return generateServiceEstimateFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateServiceEstimatePrompt',
  input: {schema: GenerateServiceEstimateInputSchema},
  output: {schema: GenerateServiceEstimateOutputSchema},
  prompt: `You are a pricing expert for The OSH Atelier, a luxury makeup and costume design brand.  Based on the user's request, create an itemized statement of work with pricing.

Request Details: {{{requestDetails}}}`,
});

const generateServiceEstimateFlow = ai.defineFlow(
  {
    name: 'generateServiceEstimateFlow',
    inputSchema: GenerateServiceEstimateInputSchema,
    outputSchema: GenerateServiceEstimateOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
