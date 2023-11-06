import TextEditor from '../components/Editor';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <script src='https://accounts.google.com/gsi/client' async></script>
      <Header />
      <div className='object-contain h-96 mb-12 sm:mb-16'>
        <TextEditor />
      </div>
      <Footer />
    </>
  );
}
