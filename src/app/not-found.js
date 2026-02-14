import Link from 'next/link'
import React from 'react'

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-darkbrown via-darkpurple to-darkbrown px-4">
            <div className="text-center">
                {/* 404 Number */}
                <h1 className="text-[150px] md:text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink via-lightpurple to-pink leading-none mb-4 animate-pulse">
                    404
                </h1>

                {/* Error Message */}
                <h2 className="text-3xl md:text-5xl font-berkshire text-white mb-4">
                    Page Not Found
                </h2>

                <p className="text-lightgray text-lg md:text-xl mb-8 max-w-md mx-auto">
                    Oops! The page you're looking for doesn't exist or has been moved.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                        href="/"
                        className="px-8 py-3 bg-gradient-to-r from-pink to-darkpurple text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-pink/50"
                    >
                        Go Home
                    </Link>

                    <button

                        className="px-8 py-3 border-2 border-lightpurple text-lightpurple rounded-full font-semibold hover:bg-lightpurple hover:text-darkbrown transition-all duration-300"
                    >
                        Go Back
                    </button>
                </div>

                {/* Decorative Elements */}
                <div className="mt-12 flex justify-center gap-2">
                    <div className="w-2 h-2 bg-pink rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                    <div className="w-2 h-2 bg-lightpurple rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-pink rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
            </div>
        </div>
    )
}
