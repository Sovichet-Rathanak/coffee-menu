import CardComponent from "@/components/CardComponent";

export default function Home() {
  return (
    <div className="p-20 min-h-screen">
      <h1 className="text-3xl font-bold text-black mb-6">
        Coffee Menu
      </h1>

      <div className="grid grid-cols-3 gap-6">
        {Array.from({ length: 20 }).map((_, index) => (
          <CardComponent key={index} />
        ))}
      </div>
    </div>
  );
}
