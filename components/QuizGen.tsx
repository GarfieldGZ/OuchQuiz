import { OpenAI } from 'langchain/llms/openai';
import { z } from 'zod';
import { PromptTemplate } from 'langchain/prompts';
import { StructuredOutputParser } from 'langchain/output_parsers';
import { RunnableSequence } from 'langchain/schema/runnable';

const QuizGen = async (inputContent: string) => {
  const parser = StructuredOutputParser.fromZodSchema(
    z.object({
      quizName: z.string().describe('name of the generated quiz'),
      quizzes: z
        .array(
          z.object({
            quiz_number: z.string().describe('number of the generated quiz'),
            question: z.string().describe('question of the generated quiz'),
            option_1: z
              .string()
              .describe('answer option 1 of the generated quiz'),
            option_2: z
              .string()
              .describe('answer option 2 of the generated quiz'),
            option_3: z
              .string()
              .describe('answer option 3 of the generated quiz'),
            option_4: z
              .string()
              .describe('answer option 4 of the generated quiz'),
            correct_answer: z
              .string()
              .describe('correct answer option of the generated quiz'),
          })
        )
        .describe(
          'collection of the generated quizzes, you need to generate a minimum of 10 quizzes'
        ),
    })
  );

  const chain = RunnableSequence.from([
    PromptTemplate.fromTemplate(
      'Generate sensible multiple choice quizzes based on the user provided information only, each quiz should have 4 options and one of them should be correct. Use only the information given to generate at least 10 quizzes with correct format.\n{format_instructions}\n{information}'
    ),
    new OpenAI({
      temperature: 0,
      openAIApiKey: process.env.OPENAI_API_KEY,
    }),
  ]);

  console.log(parser.getFormatInstructions());

  const response = await chain.invoke({
    information: inputContent,
    format_instructions: parser.getFormatInstructions(),
  });

  return response;
};

export default QuizGen;
