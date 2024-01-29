import { logo2 } from '../assets';

const Header = () => {
    return (
        <header className='w-full flex justify-center items-center flex-col'>
            <nav className='flex justify-between items-center w-full mb-10 pt-3'>
                <img src={logo2} alt="resumiere_logo" className='w- object-contain ' />
                <button type='button'
                    onClick={() => window.open('https://github.com/ramazan-ertunc')}
                    className='black_btn'>
                    GitHub
                </button>
            </nav>
            <h1 className='head_text'>
                Summarize Websites with <br className='max-md:hidden' />
                <span className='red_gradient'>OpenAI GPT-4</span>
            </h1>
            <h2 className='desc'>
                Facilitate your reading experience with Resümiere, 
                a freely available article summarization model that 
                condenses extensive articles into concise and clear summaries.

            </h2>
        </header>
    )
}

export default Header