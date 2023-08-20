

const SectionHeading = ({ heading, subHeading, align }) => {

  return (
    <div className={`pb-10 font-body ${align}`}>
      <h2 className="text-heading font-semibold text-3xl capitalize leading-normal">{heading}</h2>
      <p className="text-paragraph font-normal text-base leading-[30px]">{subHeading}</p>
    </div>
  );
};

export default SectionHeading;
