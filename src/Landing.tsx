import './App.css'
export default function Landing() {
    return (
        <div data-theme="cupcake" className="text-center bg-black min-w-full min-h-screen mx-auto flex-auto container p-4 space-y-4">
            <h1 className="text-[2.75rem] text-secondary">Hello world</h1>
            <div className="mockup-browser border bg-base-300 w-[32rem] flex flex-wrap mx-auto">
                <div className="mockup-browser-toolbar flex flex-auto">
                    <div className="input">https://damienfoo.com</div>
                </div>
                <div className="flex flex-auto justify-center px-4 py-8 bg-base-800 text-wrap text-secondary bg-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quidem debitis illum iste alias, eveniet optio, facere sapiente eligendi sunt sint, eos iusto maxime suscipit accusamus numquam quo laborum labore ex soluta corrupti quam distinctio. Sed, corporis sint saepe recusandae, veritatis tempore nam, itaque quos culpa maiores libero! Asperiores, explicabo.!</div>
            </div>
            <div className="mockup-code bg-[#fcf0e5] text-black max-w-fit mx-auto">
                <pre data-prefix="$"><code className='text-error'>npm i daisyui // For NPM users</code></pre>
                <pre data-prefix="$"><code className='text-secondary'>bun i daisyui // For Bun users</code></pre>
                <pre data-prefix=">" className="text-warning"><code>installing...</code></pre>
                <pre data-prefix=">" className="text-success"><code>Done!</code></pre>
            </div>
            <div className='container flex flex-col mx-auto space-y-4 h-screen w-fit mt-3'>
                <button className='btn btn-neutral w-fit mx-auto rounded-md text-amber-600 py-2 px-2' type='button' onClick={
                    () => {
                        window.open("https://damienfoo.dev");
                    }}>
                    Click to check out my profile page
                </button>
                <button className='btn btn-base w-fit mx-auto rounded-md text-amber-600 py-2 px-2' type='button' onClick={
                    () => {
                        window.open("https://damienfoolight.uk");
                    }}>
                    Click to check out my Chakra UI guide
                </button>
                <button className='btn btn-primary w-fit mx-auto rounded-md text-yellow-100 py-2 px-2' type='button' onClick={
                    () => {
                        window.open("https://damienfoo.uk");
                    }}>
                    Click to check out my DaisyUI guide
                </button>
                <button className='btn btn-error w-fit mx-auto rounded-md text-gray-100 py-2 px-2' type='button' onClick={
                    () => {
                        window.open('/langa');
                    }
                }>
                    Click to check out the Index page
                </button>
            </div>
        </div>
    );
}