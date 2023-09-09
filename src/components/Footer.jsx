const Footer = () => {
  return (
    <div className="bg-footer-bg h-2/6  bg-center pb-6">
      <div className="container mx-auto flex justify-between pb-[6rem]">
        <div className="">
          <h1 className="font-semibold mb-2">SERVICES</h1>
          <ul>
            <li>
              <a href="">Emergency Checkup</a>
            </li>
            <li>
              <a href="">Monthly Checkup</a>
            </li>
            <li>
              <a href="">Weekly Checkup</a>
            </li>
            <li>
              <a href="">Deep Checkup</a>
            </li>
          </ul>
        </div>
        <div className="">
          <h1 className="font-semibold mb-2">ORAL HEALTH</h1>
          <ul>
            <li>
              <li>
                <a href="">Fluoride Treatment</a>
              </li>
              <li>
                <a href="">Cavity Filling</a>
              </li>
              <li>
                <a href="">Teath Whitening</a>
              </li>
            </li>
          </ul>
        </div>
        <div className="">
          <h1 className="font-semibold mb-2">OUR ADDRESS</h1>
          <p>New York - 101010 Hudson</p>
        </div>
      </div>
      <p className="text-center ">Copyright 2023 All Rights Reserved</p>
    </div>
  );
};

export default Footer;
