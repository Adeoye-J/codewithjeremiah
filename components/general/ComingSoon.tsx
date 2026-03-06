import Button from '@/utils/Button'

const ComingSoon = () => {
    return (
        <div className='py-12 md:py-20 bg-gray-100 dark:bg-black px-6 md:px-12 lg:px-20'>
            <div className="max-w-7xl mx-auto space-y-2 flex flex-col md:flex-row items-center gap-3">
                {/* Text Content */}
                <div className="w-full md:w-1/2 space-y-6 flex flex-col items-center text-center md:items-start md:text-start">
                    <span className='text-xs text-gray-500 font-semibold inline-block'>{`---`} Coming Soon</span>
                    <h2 className='text-xl md:text-3xl lg:text-5xl font-medium flex flex-col'>Get Notified <span className='text-blue-900'>When Courses Launch</span></h2>
                    <form className=" rounded-lg flex">
                        <input type="email" required placeholder='Enter your email address' className='border-2 border-r-0 w-62.5 md:w-75 border-blue-950 p-3 md:p-4 rounded-l-lg outline-none text-sm' />
                        {/* <Button button className='rounded-lg cursor-pointer' variant='secondary' size='small'>Notify Me</Button> */}
                        <button className='cursor-pointer text-xs md:text-sm bg-blue-950 p-3 md:p-4 rounded-r-lg border-2 border-blue-950 font-semibold text-white hover:bg-white dark:hover:bg-black hover:text-blue-950 dark:hover:text-white'>Notify Me</button>
                    </form>
                </div>

                {/* Image */}
                <div className="w-full md:w-1/2">
                    <img src="/images/man-jumps-into-wall.jpg" alt="Courses Coming Soon Image" className='' />
                </div>
            </div>
        </div>
    )
}

export default ComingSoon