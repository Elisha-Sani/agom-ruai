import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative flex h-screen justify-center items-center overflow-hidden">
            <Image
                src="/home/hero-image.webp"
                alt="Image of a nice church"
                fill
                sizes="100vw"
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10 text-center max-w-4xl mt-6">
                <h2 className="text-white text-2xl md:text-5xl font-bold tracking-wide">
                    Where Grace Abounds and Community Begins
                </h2>
                <div className="space-x-6 mt-4 flex justify-center">
                    <button className="rounded-full bg-[#E9C349] hover:bg-[#FFE088] px-4 py-2 shadow-md">
                        Join Us This Sunday
                    </button>
                    <button className="border border-white rounded-full text-white font-semibold backdrop-blur-xl px-4 py-2">
                        Contact Us
                    </button>
                </div>
            </div>
        </section>
    );
}
