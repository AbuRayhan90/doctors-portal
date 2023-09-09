import Button from "./Button";

const Contact = () => {
  return (
    <div className="bg-doctors-bg py-4 my-[6rem] bg-center">
      <div className="container mx-auto">
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden  ">
          <div className="w-full p-6 m-auto lg:max-w-xl">
            <div className="text-center mb-6">
              <h1 className="text-xl text-primary">Contact Us</h1>
              <h1 className="text-3xl text-white">Stay connected with us</h1>
            </div>

            <form className="mt-6">
              <div className="mb-2">
                <input
                  type="text"
                  name="name"
                  className="w-full
            block px-6 py-2 mt-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-2">
                <input
                  name="text"
                  type="text"
                  className="
            block
            w-full
            mt-4 px-6 py-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="mb-2">
                <textarea
                  name="message"
                  className="
            block
            w-full
            mt-4 px-6 py-8
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                  rows="5"
                  placeholder="Your message"
                ></textarea>
              </div>

              <div className="my-6 text-center">
                <Button type="submit">Submit</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
