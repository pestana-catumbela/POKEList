import './App.css';
import Head from './components/head/head';
import Body from './components/body/body';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
      <main className="myMainElement">
        <Head />

        <Body />

        <Footer />
      </main>
    </>
  );
}

export default App;
