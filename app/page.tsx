import TextEditor from '../components/Editor';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <div className='object-contain h-96 mb-12 sm:mb-16'>
        <TextEditor />
      </div>
      <Footer />
    </>
  );
}
