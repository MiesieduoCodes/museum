import SideNav from "./components/sidenav";

export default function Home() {
  return (
    <div className="flex">
      {/* Side Navigation */}
      <SideNav />

      {/* Main Content */}
      <section className="flex-1 py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl bg-green-600 font-bold">
            Next JS Project
          </h1>
          <p className="mt-4 text-lg">
            Welcome to the Next.js project with a responsive sidebar.
          </p>
        </div>
      </section>
    </div>
  );
}
