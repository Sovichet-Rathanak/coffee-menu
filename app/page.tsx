import CardComponent from "@/components/CardComponent";

export default function Home() {
  return (
    <div className="p-4 sm:p-6 md:p-10 lg:p-20 min-h-screen">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-6 md:mb-8">
        Coffee Menu
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        {Array.from({ length: 10 }).map((_, index) => (
          <CardComponent key={index} />
        ))}
      </div>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-6 md:mb-8 pt-8">
        Tea Menu
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        {Array.from({ length: 10 }).map((_, index) => (
          <CardComponent key={index} />
        ))}
      </div>
    </div>
  );
}