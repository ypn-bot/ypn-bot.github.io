import { FaHashtag, FaUsers, HiEmojiHappy } from 'react-icons/all';
const StatsSection = () => {
    return (
        <div>
            <div className={'flex justify-center items-center bg-gray-800'}>
                <div
                    className={
                        'flex justify-center items-center flex-col text-yellow-300 p-20'
                    }
                >
                    <FaHashtag size="125" />
                    <div className="text-2xl font-bold my-2">
                        {Math.floor(
                            Math.random() * (1000 * 100 * 10 - 1000 * 100 * 2) +
                                1000 * 100 * 2
                        )}
                    </div>
                    <div className="text-white font-bold text-xl">Channels</div>
                </div>
                <div
                    className={
                        'flex justify-center items-center flex-col text-green-300 p-20'
                    }
                >
                    <FaUsers size="125" />
                    <div className="text-2xl font-bold my-2">
                        {Math.floor(
                            Math.random() * (1000 * 100 * 10 - 1000 * 100 * 2) +
                                1000 * 100 * 2
                        )}
                    </div>{' '}
                    <div className="text-white font-bold text-xl">Users</div>
                </div>
                <div
                    className={
                        'flex justify-center items-center flex-col text-indigo-300 p-20'
                    }
                >
                    <HiEmojiHappy size="125" />
                    <div className="text-2xl font-bold my-2">
                        {Math.floor(
                            Math.random() * (1000 * 100 * 10 - 1000 * 100 * 2) +
                                1000 * 100 * 2
                        )}
                    </div>{' '}
                    <div className="text-white font-bold text-xl">Emojis</div>
                </div>
                <div
                    className={
                        'flex justify-center items-center flex-col text-purple-300 p-20'
                    }
                >
                    <svg width="125" height="125" viewBox="0 0 24 24">
                        <path
                            fill="currentColor"
                            d="M11 10.9C11 10.9 11 10.9 11 10.9V8.82929C9.83481 8.41746 9 7.30622 9 6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6H17C17 3.23858 14.7614 1 12 1C9.23858 1 7 3.23858 7 6C7 7.79499 7.94587 9.36906 9.36637 10.251L6.29491 16.0216C6.19867 16.0074 6.1002 16 6 16C4.89543 16 4 16.8954 4 18C4 19.1046 4.89543 20 6 20C6.82012 20 7.52495 19.5064 7.83358 18.8H16.1664C16.475 19.5064 17.1799 20 18 20C19.1046 20 20 19.1046 20 18C20 16.8954 19.1046 16 18 16C17.1799 16 16.475 16.4936 16.1664 17.2H7.83359C7.82844 17.1882 7.82318 17.1765 7.81781 17.1648L11 10.9Z"
                        ></path>
                        <path
                            fill="currentColor"
                            d="M12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6C14 6.43529 13.8609 6.8381 13.6248 7.16643L18 13C20.7614 13 23 15.2386 23 18C23 20.7614 20.7614 23 18 23C15.9497 23 14.1876 21.7659 13.416 20H15.7639C16.3132 20.6138 17.1115 21 18 21C19.6568 21 21 19.6569 21 18C21 16.3431 19.6568 15 18 15H17L12 8Z"
                        ></path>
                        <path
                            fill="currentColor"
                            d="M10.584 20C9.8124 21.7659 8.05032 23 6 23C3.23858 23 1 20.7614 1 18C1 15.2386 3.23858 13 6 13V15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21C6.8885 21 7.68679 20.6138 8.23611 20H10.584Z"
                        ></path>
                    </svg>
                    <div className="text-2xl font-bold my-2">
                        {Math.floor(
                            Math.random() * (1000 * 100 * 10 - 1000 * 100 * 2) +
                                1000 * 100 * 2
                        )}
                    </div>{' '}
                    <div className="text-white font-bold text-xl">WebHooks</div>
                </div>
            </div>
        </div>
    );
};
export default StatsSection;