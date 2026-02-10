import vectorArrow from "../../assets/Vector.png";

const FooterArrow = () => {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-1/2 hidden -translate-x-1/2 items-center lg:flex">
      <img alt="" className="h-[430px] w-auto opacity-35" src={vectorArrow} />
    </div>
  );
};

export default FooterArrow;
