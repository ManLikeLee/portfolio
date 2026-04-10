export function TrustStrip() {
  return (
    <div className="w-full flex flex-row items-center justify-center gap-6 md:gap-10 py-6 border-y border-blue-100 bg-white">
      <div className="text-gray-700 font-medium flex items-center gap-2">
        <span className="block w-2 h-2 rounded-full bg-blue-500" />
        Built real-world platform (Laundaland)
      </div>
      <Separator />
      <div className="text-gray-700 font-medium flex items-center gap-2">
        <span className="block w-2 h-2 rounded-full bg-blue-500" />
        MVP-ready systems
      </div>
      <Separator />
      <div className="text-gray-700 font-medium flex items-center gap-2">
        <span className="block w-2 h-2 rounded-full bg-blue-500" />
        Designed for real markets
      </div>
      <Separator />
      <div className="text-gray-700 font-medium flex items-center gap-2">
        <span className="block w-2 h-2 rounded-full bg-blue-500" />
        Performance & scalability
      </div>
    </div>
  );
}

function Separator() {
  return <span className="hidden md:block w-px h-6 bg-blue-100 mx-2" />;
}
