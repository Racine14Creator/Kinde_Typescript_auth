
export default function Home() {
  return (
    <div className="container flex max-w-[1000px] mx-auto h-[90vh] justify-center items-center p-5 my-5">
      <div className="relative flex flex-col max-w-md text-center mx-auto">
        <h2 className="text-5xl font-extrabold my-10">Welcome to this page</h2>
        <p className="text-2xl font-normal text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, distinctio? Animi quisquam consequatur dolore architecto, quo ipsa
        </p>
        <button className="mx-auto button bg-blue-500 w-fit px-5 py-2 rounded-md my-5">Get Started</button>
      </div>
    </div>
  );
}
