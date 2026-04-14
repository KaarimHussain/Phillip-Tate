import Image from "next/image"

export default function FeaturedBook() {
    const books = [
        {
            id: "01",
            title: "FADING DREAMS",
            image: "https://blog-cdn.reedsy.com/directories/gallery/387/large_ea9eeea06749f329947519b2284f7a41.jpg",
            link: "LEARN MORE"
        },
        {
            id: "02",
            title: "AWAKENING",
            image: "https://blog-cdn.reedsy.com/directories/gallery/380/large_73a1bc9065255e29a32f56ca0efcdd8a.jpg",
            link: "LET'S DIVE INTO MY JOURNEY →",
            isFeatured: true
        },
        {
            id: "03",
            title: "WHAT COMES NEXT?",
            image: "https://blog-cdn.reedsy.com/directories/gallery/397/large_1546e99e80565913a3a21fffb7f8eb93.jpg",
            link: "LEARN MORE"
        }
    ];

    return (
        <section className="h-full w-full bg-white py-32">
            <div className="base-container flex flex-col items-center">
                {/* Header */}
                <div className="text-center space-y-2 mb-20">
                    <p className="text-[10px] font-bold tracking-[0.2em] text-black/40 uppercase">theguardian</p>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading tracking-tight text-black uppercase">FEATURE BOOKS</h2>
                </div>

                {/* Books Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full items-start">
                    {books.map((book) => (
                        <div key={book.id} className={`flex flex-col items-center space-y-8 ${book.isFeatured ? 'md:-mt-12' : ''}`}>
                            <div className="w-full relative">
                                <span className="absolute -top-6 -left-2 text-[10px] font-bold text-black/50">{book.id}</span>
                                <div className="bg-secondary p-10 flex items-center justify-center relative group">
                                    <div className="w-full aspect-[3/4] shadow-2xl transition-transform duration-500 group-hover:scale-105">
                                        <Image
                                            src={book.image}
                                            alt={book.title}
                                            width={400}
                                            height={"100"}
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>
                                    {book.isFeatured && (
                                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-black rounded-full flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform">
                                            <span className="text-xs">👁</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {book.isFeatured ? (
                                <a href="#" className="text-[10px] font-bold tracking-[0.2em] text-black uppercase mt-12 hover:opacity-70 transition-opacity">
                                    {book.link}
                                </a>
                            ) : (
                                <a href="#" className="text-[10px] font-bold tracking-[0.2em] text-black uppercase border-b border-black/20 pb-1 hover:border-black transition-colors">
                                    {book.link}
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}