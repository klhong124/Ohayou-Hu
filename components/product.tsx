import Image from "next/image";

const myLoader = ({ src, width, quality }) => {
  return `https://www.awesomemerchandise.com/assets/images/products/Continental-Unisex-Classic-Jersey-T-Shirts_media-02.jpg?resizeid=6&resizeh=1200&resizew=1200`;
};

const product = () => {
  return (
    <div className="container">
      <div className="card">
        <Image loader={myLoader} src="me.png" alt="Picture of the author" width={500} height={500} />
      </div>
    </div>
  );
};

export default product;
