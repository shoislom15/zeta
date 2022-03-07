export const Mask = ({ className = "" }) => {
  return (
    <div className={`${className}`}>
      <span className="mask1 mask mr-5 mb-4 w-1/2 text-center md:w-full"></span>
      <span className="mask2 mask mr-5 mb-4 w-1/2 text-center md:w-full"></span>
      <span className="mask3 mask mr-5 mb-4 w-1/2 text-center md:w-full"></span>
      <span className="mask4 mask mr-5 mb-4 w-1/2 text-center md:w-full"></span>
    </div>
  );
};
