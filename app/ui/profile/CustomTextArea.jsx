const CustomTextArea = ({ label }) => {
  return (
    <div className="flex flex-col md:flex-row gap-2 w-full items-center py-2">
      <div className="flex w-full md:w-1/4">
        <label className="text-sm">{label}</label>
      </div>
      <div className="flex w-full md:w-3/4">
        <textarea className="border w-full p-1 outline-none"></textarea>
      </div>
    </div>
  );
};
export default CustomTextArea;
