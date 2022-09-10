const MailList = () => {
  return (
    <section id="mailList" className="mt-6 py-6 bg-primary text-white">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="email-sub-text text-center basis-full md:basis-1/2">
            <h5 className="text-2xl sm:text-3xl font-semibold">
              Save time, Save Money!
            </h5>
            <p className="text-lg xs:text-xl">
              Sign up and we'll send you the best deals
            </p>
          </div>
          <div id="emailSubForm" className="basis-full md:basis-1/2 text-center">
            <input
              type="email"
              name="email_sub_address"
              id="emailSubAddress"
              className="outline-none border-none rounded xs:rounded-l-2xl xs:rounded-r-none px-4 py-3 text-black w-full xs:w-auto" 
              placeholder="Your Email Address"
            />
            <button
              type="submit"
              className="inline-flex p-3 bg-secondary text-primary-700 uppercase rounded xs:rounded-r-2xl  xs:rounded-l-none ml-0 xs:-ml-3 hover:bg-primary-700 hover:text-white font-medium ring-2 ring-transparent focus:ring-primary-200 mt-3 w-full xs:w-auto xs:mt-0 justify-center"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MailList;
