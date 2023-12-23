const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-slate-800 text-neutral-content">
        <nav>
          <h1 className=" text-3xl font-semibold text-gray-100">SkyMart</h1>
          <p className=" text-sm text-gray-300">Your Desired Shopping Place</p>
        </nav>
        <nav>
          <header className="footer-title">Contact</header>
          <a className="link link-hover">+8800000000</a>
          <a className="link link-hover">skymart@mail.com</a>
          <a className="link link-hover">Dhaka, Bangladesh</a>{" "}
        </nav>
        <nav>
          <header className="footer-title">Quick Links</header>
          <a href="/products" className="link link-hover">
            All Products
          </a>
          <a href="/cart" className="link link-hover">
            Cart
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
