'use client';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import CharacterCount from '@tiptap/extension-character-count';
import CustomButton from './CustomButton';
import Placeholder from '@tiptap/extension-placeholder';

const limit = 3000;

const TextEditor = () => {
  let exportText = '';

  const GenerateQuiz = () => {
    if (!editor) {
      return null;
    }
    exportText = editor.getText();
    console.log(exportText);
  };
  const editor = useEditor({
    extensions: [
      StarterKit,
      CharacterCount.configure({
        limit,
      }),
      Placeholder.configure({
        placeholder: 'Insert text to generate an unique quiz:',
      }),
    ],
    editorProps: {
      attributes: {
        class:
          ' scroll-smooth max-w-none sm:prose-base sm:p-6 lg:prose-lg lg:p-10 p-4 flex-1 overflow-auto h-96 focus:outline-none',
      },
    },
    content: `
    <p>Welcome to Ouch!Quiz demo! The web functions are currently under development...</p>
  `,
  });

  if (!editor) {
    return null;
  }

  return (
    <div className='rounded-3xl border-2 border-black shadow-2xl mx-auto m-5 mt-24 sm:mt-28 lg:mt-32 w-11/12 sm:w-5/6 lg:w-3/4 overflow-hidden'>
      <EditorContent editor={editor} />
      <div className='character-count text-gray-400 font-mono flex justify-between items-center'>
        <div className='absolute ml-4 sm:ml-6 lg:ml-10 mb hidden sm:flex'>
          {editor.storage.characterCount.characters()}/{limit} characters
        </div>
        <div className='absolute ml-4 sm:ml-6 lg:ml-10 mb flex sm:hidden'>
          {editor.storage.characterCount.characters()}/{limit} char
        </div>
        <CustomButton
          title='Generate Quiz'
          containerStyles='z-10 w-full py-2 text-base font-mono font-bold text-black border-t-2 border-black hover:bg-black hover:text-white transition-all duration-300 delay-100'
          handleClick={GenerateQuiz}
        />
        <div className='absolute sm:ml-52 lg:ml-56 hidden md:flex'>
          {editor.storage.characterCount.words()} words
        </div>
      </div>
    </div>
  );
};

export default TextEditor;
