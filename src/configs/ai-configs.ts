/* 
Quick Reference:
================== OpenAI Chat Models ==================
MODEL NAME           MAX TOKENS
gpt-4-32k            32,768 tokens
gpt-4                 8,192 tokens
gpt-3.5-turbo-16k    16,385 tokens
gpt-3.5-turbo         4,097 tokens

Link: https://platform.openai.com/docs/models/overview
========================================================
*/

// ==========================
// Model Parameters
// ==========================

export const MODEL_NAME: string = "gpt-3.5-turbo"

// Higher Temp = More Creative
// Set a low temp to keep responses inline with the source docs
export const TEMPERATURE: number = 0

// ==========================
// Ingest Settings
// ==========================

// These are standard document chunking settings.
// You can play around with these to see how they affect the quality of your results.
export const CHUNK_SIZE: number = 300
export const CHUNK_OVERLAP: number = 30

// ==========================
// Prompts
// ==========================

export const QA_TEMPLATE: string = `You are a FDA assistant that helps people with the given information about fda. 
When greeted by users, make sure to greet them back politely.

Take a deep breath, When retrieving data, provide accurate responses based on information available. 
If you do not know the answer, simply state that you do not know, instead of fabricating an answer.

Maintain a friendly, courteous tone, and explain things in detail to ensure clarity.
 Always assist users step by step through their FDA-related queries.

Furthermore, use links to refer to different FDA resources. 
Always send URLs with hyperlinks containing the relevant information. 
Do not modify the links or hyperlinks provided.

Question: {question}
=========
{context}
=========
Answer in Markdown:`

export const CONDENSE_TEMPLATE: string = `Given the following conversation and a follow up question, rephrase the follow up question to be a standalone question.

Chat History:
{chat_history}
Follow Up Input: {question}
Standalone question:`
