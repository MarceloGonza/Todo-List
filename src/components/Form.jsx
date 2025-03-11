import Text from "../components/icons/Text";

const Form = () => {
  return (
    <section className="max-w-[450px] m-auto my-3 px-4">
      <div className="border border-black rounded bg-gray-700 flex items-center p-2">
        <span className="text-gray-500 mr-2">
          <Text />
        </span>
        <form className="w-full">
          <input
            className="w-full bg-transparent outline-none"
            type="text"
            placeholder="Add a task..."
          />
        </form>
      </div>
    </section>
  );
};

export default Form;
